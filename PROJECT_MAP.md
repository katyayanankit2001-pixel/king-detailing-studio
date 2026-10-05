# Project Map

## Runtime
- Frontend: Vite + React
- 3D: Three.js + React Three Fiber + Drei
- Animation: GSAP / scroll-driven state
- Backend: Express
- Lead storage: Google Sheets API
- Styling: Tailwind CSS v4 + project CSS

## Commands
```bash
npm install
npm run dev
npm run build
npm start
```

`npm run dev` starts Vite and the Express API together.

## Key routes
- `/` — public website
- `/admin` — lightweight protected lead view
- `/api/health` — API health
- `/api/leads` — POST enquiry
- `/api/admin/leads` — protected lead read

## Environment
Copy `.env.example` to `.env`.
Google service-account credentials belong only in the server environment.

## Asset
`public/models/fortuner.glb` is the supplied Toyota Fortuner GLB.

## Future modification rule
Prefer editing the smallest relevant component instead of rewriting the application.
