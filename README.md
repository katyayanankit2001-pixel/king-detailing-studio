# King Detailing Studio

Premium automotive detailing website for Arrah, Bihar. React + Vite + Tailwind CSS + React Three Fiber, with an Express lead API and optional Google Sheets storage.

## 1. Install

```bash
npm install
```

## 2. Add the vehicle

Place the supplied Toyota Fortuner GLB at:

`public/models/fortuner.glb`

The app has a graceful loading/failure path; the scene architecture does not depend on a fake replacement asset.

## 3. Add studio images

Replace these placeholders in `public/images/gallery/`:

- `paint-correction.webp`
- `ceramic-coating.webp`
- `interior-detailing.webp`
- `ppf.webp`

The before/after component is intentionally asset-ready for your own photography.

## 4. Backend / Google Sheets

Copy `.env.example` to `.env`.

For local development, you can leave Google variables empty. The API will run in mock mode so the frontend remains testable.

For production Google Sheets storage:

1. Create a Google Cloud project.
2. Enable Google Sheets API.
3. Create a service account.
4. Create a Google Sheet with a tab named `Leads`.
5. Share that sheet with the service account email as Editor.
6. Set `GOOGLE_SHEETS_SPREADSHEET_ID`, `GOOGLE_SHEETS_SHEET_NAME`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, and `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` in the backend environment.
7. Never commit `.env` or credentials.

Recommended sheet columns:

`Timestamp | Lead ID | Name | Phone | Car Brand | Car Model | Service | Preferred Date | Preferred Time | Message | Source | Status`

## 5. Development

Run both client and API:

```bash
npm run dev
```

Client: `http://localhost:5173`
API: `http://localhost:8787`

## 6. Production build

```bash
npm run build
npm start
```

In production, serve the Vite `dist/` directory through your hosting layer and route `/api/*` to the Express service. Set `CLIENT_ORIGIN` to the production origin.

## Architecture

`src/components` contains presentation sections. Business information is centralized in `src/data/garageData.js`. The browser submits only to `/api/leads`; Google credentials exist only on the server.

The detailing story drives a single shared progress value into the 3D scene. Current implementation emphasizes camera/rotation/material/lighting transitions so the experience remains performant. Physical foam/water simulation can be added later without changing the booking architecture.
