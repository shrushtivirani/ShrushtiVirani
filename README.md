# Shrushti Virani Portfolio

A playful personal portfolio for Shrushti Virani, built as a light-theme **Tiny Cabinet of Curiosities**. The site blends resume details with a whimsical illustrated shelf world: cats, spicy food, pani puri, ramen, desserts, makeup, horror movies, and a tiny Netflix-night easter egg.

## Highlights

- Custom one-page portfolio built with Next.js App Router and TypeScript
- Light watercolor-inspired visual system with warm paper texture
- Interactive curiosity cabinet with object-based navigation
- Moon-powered horror mode that reveals the hidden Secret Shelf label
- Resume accordion with concise education, experience, skills, and achievements
- Google Drive resume button
- LinkedIn and email contact links
- Custom favicon and generated sticker artwork

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React icons

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Useful Commands

```bash
npm run typecheck
npm run build
```

## Content Notes

Main website content lives in:

```text
src/app/page.tsx
```

Main styling lives in:

```text
src/app/globals.css
```

Illustrated assets live in:

```text
public/images/stickers
```

The resume button currently points to the shared Google Drive resume link.

## Deployment

This project can be hosted on GitHub Pages after configuring static export, or on Vercel with the default Next.js settings.

For GitHub Pages, the next step is to add a static export config and a GitHub Actions deploy workflow.
