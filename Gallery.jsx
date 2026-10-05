const work = [
  ['01','Paint Correction','/images/gallery/paint-correction.webp'],
  ['02','Ceramic Coating','/images/gallery/ceramic-coating.webp'],
  ['03','Interior Detailing','/images/gallery/interior-detailing.webp'],
  ['04','PPF','/images/gallery/ppf.webp']
];
export default function Gallery() {
  return <section id="work" className="bg-[#0a0a09] py-28 md:py-36"><div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
    <div className="mb-16 flex items-end justify-between gap-5"><div><p className="eyebrow text-[#cbb78a]">Selected work</p><h2 className="display mt-4 text-5xl leading-[.9] md:text-7xl">Surface, refined.</h2></div><p className="hidden max-w-xs text-xs leading-5 text-[#77736c] md:block">Replace the curated placeholders with your own studio photography in /public/images/gallery.</p></div>
    <div className="grid gap-5 md:grid-cols-2">{work.map(([num,title,src],i) => <figure key={title} className={`group ${i % 3 === 0 ? 'md:row-span-2' : ''}`}><div className={`relative overflow-hidden bg-[#151513] ${i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}><img src={src} alt={`${title} at King Detailing Studio`} className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-90" onError={(e)=>{e.currentTarget.style.display='none'}}/><div className="absolute inset-0 grid place-items-center text-center"><div><span className="eyebrow text-white/30">{num}</span><p className="mt-2 display text-2xl text-white/80">{title}</p><p className="mt-2 text-[9px] uppercase tracking-[.16em] text-white/30">Studio image placeholder</p></div></div></div></figure>)}</div>
  </div></section>;
}
