import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { randomUUID } from 'node:crypto';
import { appendLeadToSheet, getLeadsFromSheet } from './googleSheets.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 8787);
app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',').map(s=>s.trim()) || true }));
app.use(express.json({ limit: '32kb' }));
app.use('/api/', rateLimit({ windowMs: 15 * 60 * 1000, limit: 60, standardHeaders: 'draft-8', legacyHeaders: false }));

const required = ['name','phone','carModel'];
const clean = (v, max=500) => String(v ?? '').trim().slice(0,max);

app.get('/api/health', (_req,res)=>res.json({ ok:true, service:'king-detailing-api' }));

function requireAdmin(req, res, next) {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) return res.status(503).json({ message: 'Admin dashboard is not configured.' });
  if (req.headers['x-admin-token'] !== expected) return res.status(401).json({ message: 'Unauthorized.' });
  next();
}

app.get('/api/admin/leads', requireAdmin, async (_req,res) => {
  try { res.json({ ok:true, leads: await getLeadsFromSheet() }); }
  catch (error) { console.error('Admin read failed:', error); res.status(500).json({ message:'Unable to read leads.' }); }
});
app.post('/api/leads', async (req,res) => {
  try {
    const body = req.body || {};
    if (body.website) return res.status(400).json({ message:'Spam detected.' });
    for (const key of required) if (!clean(body[key])) return res.status(400).json({ message:`${key} is required.` });
    const phone = clean(body.phone, 30);
    if (!/^[+()\-\s\d]{8,20}$/.test(phone)) return res.status(400).json({ message:'Please enter a valid phone number.' });
    const lead = { timestamp:new Date().toISOString(), leadId:randomUUID(), name:clean(body.name,100), phone, carBrand:clean(body.carBrand,80), carModel:clean(body.carModel,80), service:clean(body.service,80), date:clean(body.date,30), time:clean(body.time,30), message:clean(body.message,1000), source:'Website', status:'New' };
    const result = await appendLeadToSheet(lead);
    res.status(201).json({ ok:true, ...result });
  } catch (error) {
    console.error('Lead submission failed:', error);
    res.status(500).json({ message:'We could not save the enquiry right now. Please use WhatsApp instead.' });
  }
});

const distPath = path.resolve(__dirname, '../dist');
app.use(express.static(distPath));
app.get('/admin', (_req,res)=>res.sendFile(path.resolve(__dirname, '../admin.html')));
app.get(/.*/, (req,res,next)=>{ if (req.path.startsWith('/api/')) return next(); res.sendFile(path.join(distPath,'index.html'), err => err && next(err)); });

app.listen(port,()=>console.log(`King Detailing API listening on http://localhost:${port}`));
