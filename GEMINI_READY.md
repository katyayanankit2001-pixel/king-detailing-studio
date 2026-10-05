# GEMINI READY — KING DETAILING STUDIO

You are taking over an existing production-oriented React/Vite project.

## DO NOT REBUILD FROM SCRATCH

The project is already implemented. Inspect it first, preserve the architecture, and make targeted changes.

The real Toyota Fortuner asset is already included:

`public/models/fortuner.glb`

Do not replace it with a sphere, placeholder car, stock vehicle, or another GLB.

## FIRST ACTION

If your current Gemini environment can execute code / run a preview:

1. Inspect the project.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the preview.
5. Confirm the actual Fortuner GLB loads.
6. Check desktop and mobile.
7. Only then begin modifications.

If the current Gemini chat interface cannot execute the ZIP or launch a preview, do NOT ask me to paste the whole project. Tell me that execution is unavailable in this interface and continue by editing the files in the project context if supported.

## PROJECT MAP

- `src/App.jsx` — application composition and JSON-LD
- `src/index.css` — global visual system, typography, focus and reduced-motion rules
- `src/components/Hero/Hero.jsx` — hero
- `src/components/ThreeScene/CarScene.jsx` — Fortuner 3D scene
- `src/components/DetailingStory/DetailingStory.jsx` — scroll-driven six-stage story
- `src/components/Services/Services.jsx` — services
- `src/components/Gallery/Gallery.jsx` — selected work
- `src/components/BeforeAfter/BeforeAfter.jsx` — before/after slider
- `src/components/Booking/Booking.jsx` — enquiry form
- `src/components/Location/Location.jsx` — location
- `src/components/Navigation/Navigation.jsx` — navigation
- `src/components/Footer/Footer.jsx` — footer
- `src/data/garageData.js` — centralized business data
- `src/services/api.js` — frontend lead API
- `src/services/whatsapp.js` — WhatsApp helpers
- `server/index.js` — Express API, validation, rate limiting, admin endpoint
- `server/googleSheets.js` — server-only Google Sheets integration
- `.env.example` — server configuration
- `public/models/fortuner.glb` — actual vehicle model

## BRAND

King Detailing Studio
Arrah, Bihar, India

Phone: 7739237655
WhatsApp: 7488577308
Google Maps: https://maps.app.goo.gl/VTSpQv9BkCjdoLhLA
Instagram: https://www.instagram.com/king_detailing0707/

## VISUAL DIRECTION

Premium automotive brand, not a generic local detailing template.

Think:
- Porsche / Range Rover philosophy
- luxury automotive studio
- editorial photography
- minimal Japanese/European design

Use:
- generous whitespace
- strong typography
- near-black / warm white / soft grey
- restrained champagne accent
- subtle transitions
- cinematic lighting

Avoid:
- neon
- gaming aesthetics
- excessive gradients
- excessive glassmorphism
- giant card grids
- excessive rounded containers
- walls of copy
- animations on every element

## SIGNATURE EXPERIENCE

The Fortuner is the story.

Scroll controls one continuous transformation:

1. ARRIVAL — slightly dusty
2. DECONTAMINATE — wash/clean
3. CORRECT — paint correction
4. REFINE — polish
5. PROTECT — ceramic/protection
6. THE FINISH — final reveal

Prioritize:
camera movement, rotation, lighting, material/gloss changes.

Only add water/foam effects if they remain performant.

## BUSINESS FEATURES

Services:
- Paint Correction
- Ceramic Coating — Starting from ₹12,000+
- PPF — Starting from ₹45,000+
- Detailing — Starting from ₹5,000+

Booking fields:
Name, Phone, Car Brand, Car Model, Service, Preferred Date, Preferred Time, Message.

Lead flow:
Frontend → `/api/leads` → Express → Google Sheets.

Sheet columns:
Timestamp | Lead ID | Name | Phone | Car Brand | Car Model | Service | Preferred Date | Preferred Time | Message | Source | Status

Source = Website
Status = New

Never expose Google credentials to the browser.

## ITERATIVE WORKFLOW

For every future request:

1. Inspect the existing implementation.
2. Make the smallest clean change needed.
3. Preserve working functionality.
4. Run/build the project if execution is available.
5. Preview the result if execution is available.
6. Briefly state what changed.

Examples:
- "Make the Fortuner 20% larger."
- "Move the car right."
- "Make the background warmer."
- "Slow the correction transition."
- "Make the final reveal more cinematic."
- "Replace these gallery placeholders with my photos."
- "Improve mobile framing."

Do not regenerate the whole application unnecessarily.

## ASSET RULE

Never fabricate photographs of King Detailing Studio.

Real studio images will be supplied later.

The Fortuner must remain:
`public/models/fortuner.glb`

## PERFORMANCE

The current GLB is approximately 48 MB. Keep lazy loading, adaptive DPR and reduced effects on mobile. If optimization is later requested, consider Draco/Meshopt/KTX2 and texture compression, but do not break the model.

## FINAL STANDARD

The result should look like a premium automotive digital agency created it.

The target loop is:

RUN → PREVIEW → MODIFY → PREVIEW → REPEAT
