import { ArrowUpRight } from 'lucide-react';
import { garageData } from '../../data/garageData';

export default function Services() {
  return <section id="services" className="bg-[#efede7] text-[#121210]">
    <div className="mx-auto max-w-[1500px] px-5 py-28 md:px-8 md:py-36 lg:px-12">
      <div className="grid gap-16 lg:grid-cols-[.65fr_1.35fr]">
        <div><p className="eyebrow text-[#756b59]">Services / 04</p><h2 className="display mt-5 max-w-md text-5xl font-medium leading-[.88] md:text-7xl">The work behind the finish.</h2></div>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {garageData.services.map((service, i) => <div key={service.name} className="group grid gap-5 py-8 md:grid-cols-[60px_1fr_auto] md:items-start">
            <span className="text-[10px] tracking-[.18em] text-black/35">0{i+1}</span>
            <div><h3 className="display text-2xl md:text-3xl">{service.name}</h3><p className="mt-2 max-w-md text-sm leading-6 text-black/55">{service.description}</p><p className="mt-4 text-[10px] uppercase tracking-[.16em] text-black/45">{service.duration} · Starting from {service.price.replace('+','')}+</p></div>
            <a href="#booking" className="mt-1 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.18em] transition group-hover:text-[#8b6f36]">Enquire <ArrowUpRight size={14}/></a>
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}
