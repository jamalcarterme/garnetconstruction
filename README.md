# Garnet Construction — Next.js + Tailwind CSS

A full marketing site for Garnet Construction, built with Next.js 14 (App
Router) and Tailwind CSS.

## What's inside

- `app/` — root layout, global styles, and the single home page (`page.tsx`)
  that composes every section as an anchor-linked one-pager (Home, About,
  Services, Projects, Contact).
- `components/` — one component per section (`Header`, `Hero`, `Stats`,
  `About`, `Services`, `Portfolio`, `Testimonials`, `CtaBanner`, `Contact`,
  `Footer`, `BackToTop`). `Header`, `Contact`, and `BackToTop` are client
  components (they need interactivity); everything else renders on the
  server.
- `tailwind.config.ts` — custom design tokens (`ink`, `concrete`, `paper`,
  `blueprint`, `rust`, `steel`) and font variables.
- Images are hotlinked from Pexels (free stock photography) so the project
  runs immediately. Swap them for your own photos under `public/images` and
  update the `src` values, or add your image host to
  `next.config.js` → `images.remotePatterns`.

## Run it locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Notes

- The contact form and newsletter field are client-side only right now (they
  show a confirmation message but don't send anywhere). Wire them up to an
  API route (`app/api/contact/route.ts`), a form service like Formspree, or
  your CRM of choice.
- Phone: +234 902 222 2225 · Email: info@garnetconstruct.com — update these
  in `components/Header.tsx`, `components/Contact.tsx`, and
  `components/Footer.tsx` if they change.
