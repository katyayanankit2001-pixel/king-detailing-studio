import { useEffect, useRef, useState } from 'react';
import { storyStages } from '../../data/garageData';

export default function DetailingStory({ onProgress }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
      if (entry.isIntersecting) {
        const i = Number(entry.target.dataset.index); setActive(i); onProgress(storyStages[i].progress);
      }
    }), { rootMargin: '-38% 0px -38% 0px' });
    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, [onProgress]);
  return <section id="story" className="relative bg-[#0a0a09]">
    <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-12">
      <div className="sticky top-0 z-20 h-[100svh] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(203,183,138,.08),transparent_30%)]" />
        <div className="absolute bottom-10 left-0 hidden text-[10px] uppercase tracking-[.2em] text-white/40 md:block">Scroll to transform / {String(active + 1).padStart(2,'0')}—06</div>
      </div>
      <div className="relative z-30 -mt-[100svh]">
        {storyStages.map((stage, i) => <article key={stage.id} data-index={i} ref={el => refs.current[i] = el} className="flex min-h-[100svh] items-end py-24 md:items-center md:py-0">
          <div className={`max-w-sm transition-all duration-700 ${active === i ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-25'}`}>
            <p className="eyebrow mb-5 text-[#cbb78a]">{stage.kicker}</p>
            <h2 className="display text-5xl font-medium capitalize leading-[.9] text-white md:text-7xl">{stage.title}</h2>
            <p className="mt-6 max-w-xs text-sm leading-6 text-[#aaa69d]">{stage.body}</p>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}
