import { ArrowDown } from 'lucide-react';
import { garageData } from '../../data/garageData';
import CarScene from '../ThreeScene/CarScene';

export default function Hero({ progress }) {
  return <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#0a0a09]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(160,145,115,.11),transparent_34%),linear-gradient(180deg,#0a0a09_0%,#11110f_68%,#0a0a09_100%)]" />
    <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-end px-5 pb-8 pt-28 md:px-8 lg:px-12 lg:pb-12">
      <div className="pointer-events-none absolute inset-x-0 top-[13%] z-10 text-center md:top-[15%]">
        <p className="eyebrow mb-4 text-[#cbb78a]">Premium automotive detailing · Arrah, Bihar</p>
        <h1 className="display mx-auto max-w-5xl text-[clamp(3.5rem,9vw,9.2rem)] font-medium leading-[.8] text-white">PRECISION<br/><span className="text-[#b8b5ad]">IN EVERY</span> SURFACE.</h1>
      </div>
      <div className="absolute inset-0 z-0"><CarScene progress={progress}/></div>
      <div className="relative z-20 flex items-end justify-between gap-5">
        <div className="max-w-[260px]"><p className="text-xs leading-5 text-[#a7a39a]">A cinematic detailing experience built around the vehicle—not around the template.</p></div>
        <a href="#story" className="flex items-center gap-3 text-[10px] uppercase tracking-[.22em] text-[#d4d0c7]">Explore the process <ArrowDown size={14}/></a>
        <a href={`tel:${garageData.phone}`} className="hidden text-right text-[10px] uppercase tracking-[.2em] text-[#a7a39a] md:block">Arrah / Bihar<br/><span className="text-white">{garageData.phone}</span></a>
      </div>
    </div>
  </section>;
}
