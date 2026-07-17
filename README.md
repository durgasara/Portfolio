# Sri Durgadevi S — Portfolio

A modern, responsive developer portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Icons
- EmailJS (contact form)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

1. **Profile photo** — Replace `public/profile.svg` with your photo (`profile.png` or update the path in `About.tsx`).
2. **Resume** — Add your resume as `public/resume.pdf`.
3. **Contact form** — Copy `.env.example` to `.env` and add your [EmailJS](https://www.emailjs.com/) credentials.
4. **Social links** — Update GitHub, LinkedIn, and email in `src/data/portfolio.ts`.
5. **Project links** — Add live demo and GitHub URLs in `src/data/portfolio.ts`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import `durgasara/Portfolio`.
3. Vercel auto-detects Vite. Confirm:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add these **Environment Variables** before deploying:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**.

> **Note:** Never commit `.env`. Use `.env.example` locally and set secrets in the Vercel dashboard.

## Scripts

| Command       | Description          |
|---------------|----------------------|
| `npm run dev` | Start dev server     |
| `npm run build` | Production build   |
| `npm run preview` | Preview production build |
