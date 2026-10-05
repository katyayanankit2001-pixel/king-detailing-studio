import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { garageData } from '../../data/garageData';
import { submitLead } from '../../services/api';
import { makeWhatsAppUrl } from '../../services/whatsapp';
import { bookingMessage } from '../../utils/formatWhatsApp';

const initial = { name:'', phone:'', carBrand:'', carModel:'', service:'Detailing', date:'', time:'', message:'' };
export default function Booking() {
  const [form,setForm] = useState(initial); const [state,setState] = useState('idle'); const [error,setError] = useState('');
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  async function submit(e){ e.preventDefault(); setError(''); if(!form.name || !form.phone || !form.carModel){setError('Please add your name, phone and car model.');return;} setState('loading'); try{await submitLead(form);setState('success')}catch(err){setState('error');setError(err.message)}}
  return <section id="booking" className="bg-[#dedbd3] text-[#121210]"><div className="mx-auto max-w-[1500px] px-5 py-28 md:px-8 md:py-36 lg:px-12">
    <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-[#756b59]">Appointments / 07</p><h2 className="display mt-5 text-6xl leading-[.85] md:text-8xl">Make it<br/>exceptional.</h2><p className="mt-7 max-w-xs text-sm leading-6 text-black/55">Tell us what you drive and what you want the surface to become. We’ll confirm the right treatment.</p><a href={makeWhatsAppUrl(garageData.whatsapp,'Hello King Detailing Studio, I would like to enquire about car detailing.')} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-black/25 pb-2 text-[10px] uppercase tracking-[.18em]">WhatsApp us <ArrowUpRight size={13}/></a></div>
    {state==='success' ? <div className="flex min-h-[420px] flex-col justify-center border-y border-black/10"><div className="grid h-12 w-12 place-items-center rounded-full border border-black/20"><Check size={18}/></div><h3 className="display mt-7 text-4xl">Thank you.</h3><p className="mt-3 max-w-sm text-sm leading-6 text-black/55">Our team will contact you shortly.</p><a className="mt-8 inline-flex w-fit border-b border-black/30 pb-2 text-[10px] uppercase tracking-[.18em]" href={makeWhatsAppUrl(garageData.whatsapp, bookingMessage(form))} target="_blank" rel="noreferrer">Continue on WhatsApp</a></div> : <form onSubmit={submit} className="grid gap-0 border-y border-black/10 md:grid-cols-2 md:gap-x-10">
      {[['name','Name','text'],['phone','Phone','tel'],['carBrand','Car brand','text'],['carModel','Car model','text'],['date','Preferred date','date'],['time','Preferred time','time']].map(([name,label,type])=><label key={name} className="border-b border-black/10 py-5 text-[10px] uppercase tracking-[.16em]">{label}<input required={['name','phone','carModel'].includes(name)} name={name} type={type} value={form[name]} onChange={update} className="mt-3 block w-full bg-transparent text-base normal-case tracking-normal outline-none placeholder:text-black/25" placeholder={label}/></label>)}
      <label className="border-b border-black/10 py-5 text-[10px] uppercase tracking-[.16em]">Service required<select name="service" value={form.service} onChange={update} className="mt-3 block w-full bg-transparent text-base normal-case tracking-normal outline-none"><option>Detailing</option><option>Paint Correction</option><option>Ceramic Coating</option><option>PPF</option><option>Interior Detailing</option><option>Other</option></select></label>
      <label className="border-b border-black/10 py-5 text-[10px] uppercase tracking-[.16em] md:col-span-2">Message<textarea name="message" rows="3" value={form.message} onChange={update} className="mt-3 block w-full resize-none bg-transparent text-base normal-case tracking-normal outline-none" placeholder="Anything we should know?"/></label>
      <div className="py-6 md:col-span-2"><button disabled={state==='loading'} className="inline-flex items-center gap-3 bg-[#121210] px-6 py-4 text-[10px] font-semibold uppercase tracking-[.18em] text-white transition hover:bg-black disabled:opacity-50">{state==='loading'?'Sending…':'Request a callback'} <ArrowUpRight size={14}/></button>{error&&<p className="mt-4 text-xs text-red-700">{error}</p>}</div>
    </form>}
    </div>
  </div></section>;
}
