import { google } from 'googleapis';

export async function appendLeadToSheet(lead) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Leads';
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  if (!spreadsheetId || !privateKey || !clientEmail) return { stored: false, mode: 'mock' };
  const auth = new google.auth.GoogleAuth({ credentials: { client_email: clientEmail, private_key: privateKey }, scopes: ['https://www.googleapis.com/auth/spreadsheets'] });
  const sheets = google.sheets({ version: 'v4', auth });
  await sheets.spreadsheets.values.append({ spreadsheetId, range: `${sheetName}!A:L`, valueInputOption: 'USER_ENTERED', requestBody: { values: [[lead.timestamp, lead.leadId, lead.name, lead.phone, lead.carBrand, lead.carModel, lead.service, lead.date, lead.time, lead.message, lead.source, lead.status]] } });
  return { stored: true, mode: 'google-sheets' };
}

export async function getLeadsFromSheet() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Leads';
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  if (!spreadsheetId || !privateKey || !clientEmail) return [];
  const auth = new google.auth.GoogleAuth({ credentials: { client_email: clientEmail, private_key: privateKey }, scopes: ['https://www.googleapis.com/auth/spreadsheets'] });
  const sheets = google.sheets({ version: 'v4', auth });
  const result = await sheets.spreadsheets.values.get({ spreadsheetId, range: `${sheetName}!A:L` });
  const rows = result.data.values || [];
  return rows.slice(1).reverse().map(row => ({ timestamp: row[0] || '', leadId: row[1] || '', name: row[2] || '', phone: row[3] || '', carBrand: row[4] || '', carModel: row[5] || '', service: row[6] || '', date: row[7] || '', time: row[8] || '', message: row[9] || '', source: row[10] || '', status: row[11] || 'New' }));
}
