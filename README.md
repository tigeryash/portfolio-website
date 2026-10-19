# Yashwanth Venkatesan — Portfolio

Personal portfolio site: [yashwanthvenkatesan.com](https://yashwanthvenkatesan.com)

Built with Next.js 16 (App Router & Server Actions), React 19, TypeScript, Tailwind CSS v4, Framer Motion, next-themes, and React Email + Resend for the contact form. Linted with oxlint and formatted with oxfmt.

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `.env.local`:

```bash
RESEND_API_KEY=re_...
```

The contact form sends mail through [Resend](https://resend.com). The key lives in Vercel's project environment variables; to test the form locally, pull it with `vercel env pull .env.local`. Without a key the form shows an error toast and logs the cause on the server.

## Scripts

| Command             | What it does                              |
| ------------------- | ----------------------------------------- |
| `bun dev`           | Start the dev server                      |
| `bun run build`     | Production build                          |
| `bun run lint`      | ESLint (flat config, `eslint.config.mjs`) |
| `bun run typecheck` | TypeScript check                          |

## Editing content

Most content lives in plain data files, so updates rarely need component changes:

- `lib/site.ts` — name, title, description, URLs, resume path (used for SEO metadata, the OG image, and JSON-LD)
- `lib/data.ts` — nav links, experience, projects, and skills
- `components/about.tsx` — About Me copy
- `public/YashwanthVenkatesanResume.pdf` — resume (linked from the hero)

Project screenshots go in `public/` as `.webp` and are imported in `lib/data.ts`.

## Deploying

Deployed on Vercel. Set `RESEND_API_KEY` in the project's environment variables.
