# Edmund Adeyi: personal portfolio

A dark-first, responsive developer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS v4.
Content lives in a few plain files, so adding a project or editing a section never means touching components.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command             | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Start the dev server                           |
| `npm run lint`      | ESLint                                         |
| `npm run typecheck` | TypeScript, no emit                            |
| `npm run build`     | Production build                               |
| `npm start`         | Serve the production build                     |
| `npm run check`     | Lint, type-check, and build in one go          |

Requires Node 20 or newer.

## Where to edit things

| To change                          | Edit                          |
| ---------------------------------- | ----------------------------- |
| Name, email, social links, toggles | `src/config/site.ts`          |
| Projects and case studies          | `src/content/projects.ts`     |
| About text, principles, build steps| `src/content/about.ts`        |
| Skill groups                       | `src/content/skills.ts`       |
| Journey timeline                   | `src/content/journey.ts`      |
| Writing and community posts        | `src/content/writing.ts`      |
| Colors, fonts, theme tokens        | `src/app/globals.css`         |

### Contact details and social links

Email, X, and LinkedIn are empty until you set them, and anything empty is hidden from the site, so there are never dead
placeholder links. Set them in `src/config/site.ts` (the `configured` block) or through environment variables (see
`.env.example`):

```
NEXT_PUBLIC_CONTACT_EMAIL=you@example.com
NEXT_PUBLIC_X_URL=https://x.com/your-handle
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

The GitHub link (`https://github.com/eddidmund12`) was derived from your TradeLens repository URL. Change it in
`site.ts` if that is not your main profile.

### Adding a project

Append an object to the `projects` array in `src/content/projects.ts`. It will appear on the home page, get its own
case study at `/projects/<slug>`, and be added to the sitemap automatically. If you add a third project, either reuse
an existing `visual` or add a new mockup to `src/components/ProjectVisuals.tsx` and extend the `ProjectVisual` type in
`src/types/index.ts`.

Each feature carries a status of `implemented`, `in-progress`, or `planned`, which is shown as a badge on the case
study. **Please review these statuses** and the `role` text for both projects so they match the real state of each
repository.

### Hiding the Writing section

Set `sections.writing` to `false` in `src/config/site.ts`. The section and its nav link disappear. While
`src/content/writing.ts` has no posts, the section shows the kinds of updates you plan to share rather than invented
posts. Add real posts to the `posts` array and they replace the placeholders.

## Contact form (optional)

The site works without a form: visitors use the email and social links. To enable a real form:

1. Create a [Resend](https://resend.com) account and API key, and verify a sending domain (or use their test sender).
2. Set these on your host (server-side values are never exposed to the browser):

   ```
   RESEND_API_KEY=...
   CONTACT_TO_EMAIL=you@example.com
   CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
   NEXT_PUBLIC_CONTACT_FORM=true
   ```

3. Rebuild and redeploy (`NEXT_PUBLIC_*` values are baked in at build time).

How it behaves: the route in `src/app/api/contact/route.ts` validates every field on the server, rejects honeypot
and instant submissions silently, rate-limits to 3 messages per IP per 10 minutes, sends plain text only, and returns
clear errors. If the server values are missing it responds with a 503 and an honest message instead of pretending to
succeed. The rate limiter is in memory, so on serverless hosting consider a shared store such as Upstash Redis, or add
Cloudflare Turnstile for stronger bot protection.

## Deployment

Any host that runs Next.js works. The simplest option is [Vercel](https://vercel.com): import the repository, add the
environment variables above, and deploy. For a self-hosted Node server, run `npm run build` then `npm start`.
Set `NEXT_PUBLIC_SITE_URL` so the sitemap, canonical URLs, and social preview images use your real domain.

## Structure

```
src/
  app/            routes, layout, metadata, icon, OG image, robots, sitemap, contact API
  components/     one file per section or UI piece
  config/         site-wide configuration and navigation
  content/        all editable content as typed data
  types/          shared TypeScript types
```

## Accessibility and performance notes

- Semantic landmarks, a skip link, one `h1` per page, visible keyboard focus, and labelled form fields.
- The mobile menu is a disclosure button with `aria-expanded`; Escape closes it and returns focus.
- `prefers-reduced-motion` disables the hero entrance and the animated service-map line.
- Dark is the default theme; the choice is saved in `localStorage` and applied before paint to avoid a flash.
- Fonts are self-hosted through the `geist` package, so there is no third-party font request.
- Pages are statically generated, and the only client-side JavaScript is the navbar, theme toggle, year, and form.
"# profile-website" 
