import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { garageData } from '../../data/garageData';
import { makeWhatsAppUrl } from '../../services/whatsapp';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['Services','services'],['Work','work'],['Studio','studio'],['Contact','booking']];
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a09]/85 backdrop-blur-md' : 'bg-transparent'}`}>
    <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 md:px-8 lg:px-12">
      <a href="#top" className="display text-sm font-semibold tracking-[.08em]">KING <span className="text-[#cbb78a]">/</span> DETAILING</a>
      <nav className="hidden items-center gap-9 md:flex">
        {links.map(([label,id]) => <a key={id} href={`#${id}`} className="text-[11px] uppercase tracking-[.18em] text-[#c6c2b9] transition hover:text-white">{label}</a>)}
      </nav>
      <div className="flex items-center gap-3">
        <a href={makeWhatsAppUrl(garageData.whatsapp, 'Hello King Detailing Studio, I would like to book a detailing appointment.')} target="_blank" rel="noreferrer" className="hidden border border-white/20 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[.18em] transition hover:border-[#cbb78a] hover:text-[#d9c79f] md:inline-flex">Book now</a>
        <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(v => !v)} className="grid h-10 w-10 place-items-center border border-white/15 md:hidden">{open ? <X size={18}/> : <Menu size={18}/>}</button>
      </div>
    </div>
    {open && <div className="border-t border-white/10 bg-[#0a0a09] px-5 py-8 md:hidden">
      <nav className="flex flex-col gap-6">{links.map(([label,id]) => <a onClick={() => setOpen(false)} key={id} href={`#${id}`} className="text-sm uppercase tracking-[.2em] text-white">{label}</a>)}</nav>
    </div>}
  </header>;
}
