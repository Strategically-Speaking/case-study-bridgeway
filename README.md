# Bridgeway Community Foundation

A portfolio case study built by [Strategically Speaking](https://strategically-speaking.com) to demonstrate full-stack web development capabilities for nonprofit and community-focused organizations.

**Live demo:** [Bridgeway Community Foundation](https://bridgeway-community.vercel.app/)

---

## About the project

Bridgeway Community Foundation is a fictional nonprofit organization. This site was built as a portfolio piece showcasing:

- Next.js App Router with TypeScript
- Sanity CMS-ready architecture (currently JSON-driven, swap-ready)
- ADA/WCAG AA accessibility compliance
- Mobile-first responsive design
- Clean component architecture built for maintainability

---

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, stats strip, program previews, testimonial, CTA |
| About | `/about` | Mission, story, values, team |
| Programs | `/programs` | Program grid |
| Program detail | `/programs/[slug]` | Full description, outcomes, eligibility, apply CTA |
| Impact | `/impact` | Stats, annual highlight, testimonials |
| Contact | `/contact` | Contact options, form, map |

---

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **CMS:** JSON data module (Sanity-ready — see below)
- **Forms:** Formspree (demo mode without env var)
- **Deployment:** Vercel

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Content architecture

All site content lives in `src/data/bridgeway-content.json`. All data access goes through `src/lib/content.ts` — no page or component imports the JSON directly.

### Moving to Sanity CMS

`src/lib/content.ts` is the only file that needs to change. Replace the JSON imports with GROQ queries:

```ts
// Before (JSON)
import data from "@/data/bridgeway-content.json"
export function getPrograms() { return data.programs }

// After (Sanity)
import { client } from "./sanity"
export async function getPrograms() {
  return client.fetch(`*[_type == "program"] | order(_createdAt asc)`)
}
```

Sanity schema collections: `program`, `teamMember`, `testimonial`, `impactStat`, `siteSettings`

---

## Images

Images are sourced from Unsplash and managed in `src/lib/images.ts`. To swap any image, update its URL in that file — changes apply everywhere it's used.

---

## Form handling

The contact form checks for `NEXT_PUBLIC_FORMSPREE_ID` at runtime:

- **Not set** — simulates a successful submission (demo mode)
- **Set** — submits to Formspree and delivers to your inbox

To enable live form submissions:
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a form and copy the form ID
3. Copy `.env.local.example` → `.env.local` and add your ID

To upgrade to Resend, replace the fetch call in `src/app/contact/ContactForm.tsx` with a POST to `/api/contact`.

---

## Accessibility

Built to WCAG AA standards throughout:

- Skip to main content link (first focusable element)
- Semantic landmark regions (`header`, `nav`, `main`, `footer`)
- Strict heading hierarchy (H1 → H2 → H3)
- All images have descriptive `alt` attributes
- Visible focus rings on all interactive elements
- Keyboard navigable — no traps
- Form inputs have explicit `<label>` associations
- `aria-label` on icon-only buttons
- Color contrast minimum 4.5:1 for body text

---

## Deployment

```bash
vercel --prod
```

Set environment variables in the Vercel dashboard before deploying:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Your Formspree form ID |
