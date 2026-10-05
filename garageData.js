export const garageData = {
  brand: 'King Detailing Studio',
  location: 'Arrah, Bihar, India',
  phone: '7739237655',
  whatsapp: '7488577308',
  maps: 'https://maps.app.goo.gl/VTSpQv9BkCjdoLhLA',
  instagram: 'https://www.instagram.com/king_detailing0707/',
  modelPath: '/models/fortuner.glb',
  services: [
    { name: 'Paint Correction', description: 'Multi-stage correction and refinement for the paint surface.', price: '₹12,000+', duration: '1–2 days' },
    { name: 'Ceramic Coating', description: 'Premium ceramic protection with deep gloss and hydrophobic performance.', price: '₹12,000+', duration: '1–2 days' },
    { name: 'PPF', description: 'Paint protection film for high-impact areas and long-term protection.', price: '₹45,000+', duration: '2–4 days' },
    { name: 'Detailing', description: 'Deep interior and exterior detailing for a complete reset.', price: '₹5,000+', duration: '1 day' }
  ]
};

export const storyStages = [
  { id: 'arrival', kicker: '01 / Arrival', title: 'Start with the surface', body: 'Every transformation begins with understanding the paint.', progress: 0 },
  { id: 'wash', kicker: '02 / Wash', title: 'Decontaminate', body: 'A precise reset for every exposed surface.', progress: .2 },
  { id: 'correct', kicker: '03 / Paint correction', title: 'Correct', body: 'Remove what time has left behind.', progress: .42 },
  { id: 'polish', kicker: '04 / Polish', title: 'Refine', body: 'Sharper reflections. Deeper paint. Controlled highlights.', progress: .62 },
  { id: 'protect', kicker: '05 / Protection', title: 'Protect', body: 'A finished surface built to perform.', progress: .82 },
  { id: 'finish', kicker: '06 / Final reveal', title: 'The finish', body: 'Where your car meets perfection.', progress: 1 }
];
