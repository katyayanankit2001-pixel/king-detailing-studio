import { useCallback, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import DetailingStory from './components/DetailingStory/DetailingStory';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import Location from './components/Location/Location';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import { garageData } from './data/garageData';
import { useReducedMotion } from './hooks/useReducedMotion';

export default function App(){
  const reduced = useReducedMotion(); const [progress,setProgress] = useState(0);
  const onProgress = useCallback(v => setProgress(reduced ? 1 : v), [reduced]);
  const ld = { '@context':'https://schema.org', '@type':'AutomotiveBusiness', name:garageData.brand, telephone:`+91${garageData.phone}`, url:'https://kingdetailing.in/', address:{'@type':'PostalAddress', addressLocality:'Arrah', addressRegion:'Bihar', addressCountry:'IN'}, sameAs:[garageData.instagram, garageData.maps] };
  return <div className="site-shell"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/><Navigation/><main><Hero progress={progress}/><DetailingStory onProgress={onProgress}/><Services/><Gallery/><BeforeAfter/><Location/><Booking/></main><Footer/></div>
}
