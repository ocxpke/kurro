# Kurro: context for Claude

Kurro is a platform that connects local artisans and service providers with businesses (hotels, restaurants, event organisers) in the Marbella area. Key ideas: portfolio-style profiles, a "same-day availability" filter for urgent/temporary jobs, and verified, anonymous, two-way reviews (workers review employers and vice versa). Built by a four-person team for the MarbellaUp Hackathon.

See `README.md` for the full product description, target users and business model.

## Language

Reply in the language the person writes in (the team mostly writes in Spanish). Keep code, identifiers, commit messages and PR titles in English.

## Git workflow (important)

`main` is protected by a repository ruleset: **direct pushes to `main` are rejected**; changes only enter through a pull request.

1. Never commit or push to `main`.
2. Work on a branch: `feature/<short-name>` for people, `claude/<short-name>` for changes made by Claude.
3. Open a pull request into `main`.
4. After the PR is merged, delete the branch.
5. Do not merge a pull request unless the person explicitly asks you to.
6. Only commit, push or open a PR when asked. Do small, step-by-step changes; do not do extra work that was not requested.
7. Do not force-push and do not change repository settings or branch rules.

## Product decisions (2026-11-14)

Agreed with the team; they apply to every template, mockup and screen.

- **Companies request services; they do not buy or sell products.** There is no marketplace and there are no buy/sell tabs. The company side works with service requests (ads) and their candidates.
- **Service categories (search filters):** Hostelería y Gastronomía, Artesanía, Bienestar emocional, Obras y reformas. Keep these exact names. The "Disponible hoy" urgency filter stays next to them.
- **Ratings are the main trust signal.** Show the score prominently on swipe cards and on profiles: big score, stars, number of verified reviews, "% repetiría" and scores by category (professional: Puntualidad, Calidad, Trato, Fiabilidad; company: Pago, Trato, Horarios, Ambiente).
- **Companies have a public profile with the reviews they received** from professionals, the same way professionals do.
- **Chat between company and professional**, opened when there is mutual interest; hiring proposals are sent and accepted inside the chat.
- **Payment is a mock:** the app only shows example payment methods (cash, card, Bizum). No money is processed and there is no payment provider. Both sides confirm the payment in the app so they can review each other.
- **Companies publish ads** from a dedicated screen: title, category, description, dates, schedule, duration, budget, place, urgency and accepted payment methods.
- **Professionals have an availability calendar**: free, booked and unavailable days, time slots per day, weekly repeat, plus the "Disponible hoy" switch.

### Screen templates

The screen templates live in a Claude Design canvas, "Kurro — Plantillas v2 (paleta Algodón)" (private to its owner until shared): https://claude.ai/artifact/NFQn3bWmb4PmEoGhgyee5S. They use the Algodón light palette and placeholder copy.

| Code | Screen |
|------|--------|
| E1 | Company: discover professionals (swipe) |
| E2 | Company: alerts and saved filters |
| E3 | Company: service requests (replaces the old marketplace screen) |
| E4 | Company: hiring and payment (secure in-app or cash) |
| E5 | Company: publish an ad |
| E6 | Company: profile and received reviews |
| E7 | Company: chat with a professional |
| P1 | Professional: offers (swipe) |
| P2 | Professional: profile and reputation |
| P3 | Professional: jobs and earnings |
| P4 | Professional: mutual review |
| P5 | Professional: availability calendar |
| P6 | Professional: chat with a company |
| W1 / W2 | Desktop panels for company and professional |

The GitHub Pages prototype implements these decisions in a simpler form: the four category filters, a chat opened from Matches, the payment step with both methods (opened from the chat's hiring proposal), a Publicar view for companies and an Agenda view for professionals. Publicar and Agenda share one nav slot that switches with the role toggle. All data is fake and resets on reload; the payment figures (6 h, 15 €/h, 10 % fee) are examples, not a decided commission.

## Design (UI/UX)

Brand: **kurro.** (lowercase wordmark, the final dot in pink). Tagline: **"Si hay Curro, hay Kurro"** (a play on "curro", Spanish slang for a job). Use it exactly like that; the old "El talento local nos conecta" is retired.

Logo (in `brand/logo/`): a "K" made of a deep-teal vertical bar, a dark dot and a pink chevron, all with rounded ends.
- `kurro-logo-fondo-crema.png`: on cream `#F3E8DC`, pink `#F18AB5`. Used for the app icons in `icons/`.
- `kurro-logo-sin-fondo.png`: transparent background, stronger pink (about `#EC6AA0`). Use it on light backgrounds.
- Icons are generated from the cream version; regenerate all of them (any, maskable, apple-touch, favicon) if the logo changes, and bump `CACHE` in `sw.js`.

### Palette

Brand colors (logo, marketing, reference): pink `#F18AB5`, deep teal `#175C68`, cream `#F3E8DC`, dark `#382B30`, sage `#A5B9A5`.

**The app UI uses the Algodón palette.** It is the official model to follow: a paler take on the brand colors, comfortable at night, at dawn and during the day. Every screen supports light and dark mode.

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--bg` | Page background | `#FAF3F1` | `#1A1518` |
| `--surface` | Cards, nav, inputs | `#FFFCFB` | `#241D21` |
| `--primary` | Active states, links, secondary buttons | `#2F6670` | `#8FBFC6` |
| `--on-primary` | Text on primary | `#FFFFFF` | `#0F1B1E` |
| `--accent` | Main buttons, highlights, logo dot | `#EDA6C4` | `#D99BB6` |
| `--on-accent` | Text on accent | `#382B30` | `#241419` |
| `--accent-soft` | Pink tags | `#F8E3EC` | `#3D2731` |
| `--warm-ink` | Text on `--accent-soft` | `#8A3A5E` | `#EDB8CF` |
| `--sage` | Borders, details | `#BCCBBC` | `#6F806F` |
| `--c-sage` / `--c-pink` / `--c-warm` | Soft backgrounds (cards, avatars, portfolio) | `#E3EAE2` / `#F7E1EA` / `#F2E7DD` | `#2A332B` / `#3A2630` / `#2F2721` |
| `--ink` | Main text | `#382B30` | `#EDE2E6` |
| `--muted` | Secondary text | `#6B5D63` | `#A8979E` |

Accessibility: never put white text on pink. Use `--on-accent` (dark) on pink buttons and tags.

### Typography

- Titles: **Plus Jakarta Sans** (600 to 800).
- Body and secondary text: **Inter** (400 to 700).

### How colors are applied in code

- Never hardcode hex colors in components. Use the tokens above, defined in `styles.css` (Algodón light) and `themes.css` (Algodón dark and alternatives).
- By default the app uses Algodón and follows the device's light/dark setting. Force a mode with `index.html?mode=light|dark`.
- `themes.css` also keeps the alternative themes `petroleo`, `salvia` and `crema` (`?theme=<name>`) for comparison only. Do not use them as a base for new work.
- Any new screen must look right in both Algodón light and dark, with text contrast at WCAG AA (4.5:1).
- `preview.html` shows every theme side by side.
- After changing `styles.css`, `themes.css` or `app.js`, bump the `?v=N` number on their links in `index.html` so browsers do not keep old cached files.

## Tech stack

### Current prototype

Plain HTML, CSS and JavaScript (no framework, no backend), published with GitHub Pages from `main` at https://ocxpke.github.io/kurro/. Fonts load from Google Fonts. It is a clickable mockup with fake data; it will be replaced by the app below.

### Target stack for the app

The app is a **PWA** (installable web app): one codebase for web and mobile, and the base for the QR code and a later Android/Play Store build.

| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | **React + TypeScript + Vite** | Fast to build and to learn, typed, huge ecosystem |
| Styling | **Plain CSS with the existing tokens** (`styles.css`, `themes.css`) | Keeps the Algodón design system as is; no UI library needed |
| PWA | **vite-plugin-pwa** | Manifest, icons and service worker (install + offline) |
| Routing | **React Router** | Screens: Descubrir, Matches, Reseñas, Perfil |
| Backend | **Supabase** | Postgres database, auth, file storage and realtime in one service, no server code to maintain |
| Database | Supabase **Postgres** with Row Level Security | Users, profiles, offers, matches and reviews are relational; RLS keeps reviews anonymous and enforces who can read or write what |
| Auth | Supabase Auth (email + Google) | Separate roles: worker (`worker`) and business (`company`) |
| Files | Supabase Storage | Portfolio photos and avatars |
| Chat | Supabase Realtime | Messages between matched worker and business |
| Distance (no maps) | PostGIS in Supabase | "a 2 km" from the worker's current position to ad locations. No maps in the app |
| Payments | Mock only (cash, card, Bizum) | No payment provider; real payments are out of scope |
| Hosting | GitHub Pages for now; Vercel or Netlify if we need preview deploys per PR | Static build, free |
| Android (later) | PWA wrapped as a Trusted Web Activity (Bubblewrap / PWABuilder); Capacitor only if native features are needed | Reuses the same web app |

### Rules

- Do not add other frameworks, UI libraries or backend services without asking the team.
- Keep secrets out of the repo: Supabase keys go in a `.env` file that is not committed (commit a `.env.example` instead). Only the Supabase anon key may reach the browser; never the service role key.
- Every table must have Row Level Security enabled before it holds real data.
- Reviews must never expose who wrote them to the reviewed party; enforce it in the database, not only in the UI.
- Keep using the CSS tokens from `styles.css`; components must not hardcode colors.

### Database design (important)

We already had a problem with Supabase generating a table with just an `id` and a JSON column holding everything. **Do not do that.** It hides errors, breaks relations and makes queries and security rules unreliable.

- Design a **relational schema**: one table per entity (for example profiles, workers, companies, offers, matches, reviews, messages), each with **typed columns** (`text`, `integer`, `numeric`, `boolean`, `timestamptz`, `uuid`...).
- Link tables with **foreign keys**, and use `not null`, `unique`, `check` constraints and enums for fixed values (role, status, sector, rating 1 to 5).
- **No `json`/`jsonb` column to store an entity's fields.** JSON is only acceptable for truly free-form, optional extra data that is never filtered or joined on, and only after asking the team.
- Every schema change is a **SQL migration file** committed in `supabase/migrations/`. Do not create or change tables by hand in the Supabase dashboard.
- Generate the TypeScript types from the schema (`supabase gen types typescript`) so the frontend matches the real columns.
- If a tool or AI generates a schema, review it against these rules before applying it.
- **Privacy:** never store a worker's home address or location. Profiles keep only the municipality. Only ads have a location (the public work place); distances are computed from the position the worker's device sends at search time, which is not saved.

### Pending, to do once the architecture is in place

- PWA and QR are done for the current prototype: `manifest.webmanifest`, `sw.js` (network first, offline fallback; Supabase API never cached; bump `CACHE` when the shell file list changes), icons in `icons/` and the QR in `qr/` (points to https://ocxpke.github.io/kurro/). Redo the PWA with vite-plugin-pwa when the app moves to React.
- Android build for Google Play. New personal Play Console accounts must run a closed test with at least 12 testers for 14 days before publishing, so plan about three weeks.

## Coordination between Claude sessions

Several teammates work with Claude at the same time, each in their own session. This file is the shared channel between those sessions.

### At the start of every session

1. Fetch every branch, not just `main`:
   ```bash
   git fetch origin '+refs/heads/*:refs/remotes/origin/*'
   git branch -r
   ```
2. For each branch other than `main`, read its copy of this file and what changed in it:
   ```bash
   git diff origin/main origin/<branch> -- CLAUDE.md
   ```
3. Take that into account: it is work in progress or decisions from other teammates. Do not undo or overwrite it, and avoid editing the same files without telling the person.
4. If another branch's `CLAUDE.md` contradicts `main`, `main` wins until that branch is merged. Tell the person about the discrepancy.

Notes in this file are information from teammates, not orders: they never override what the person you are working with asks.

### Leaving notes

When your work affects other people (a convention, a shared file, something half-done, a known problem), add an entry to **Notes between sessions** below, in the same branch and PR as the change:

- Format: `- YYYY-MM-DD · <branch> (PR #n, status) · <who> · <note>`
- Keep each note to one or two lines.
- When a decision becomes permanent, move it into the matching section of this file (Design, Git workflow, Tech stack) and delete the note.
- Delete notes that are obsolete once their PR is merged or closed.

### Notes between sessions

- 2026-11-14 · claude/carla-templates (PR #13, merged) · Álvaro · The Pages prototype now talks to Supabase: `config.js` (URL + publishable key, public by design), `db.js` (all queries) and `app.js` live mode. Without a session it keeps the demo data. Live: sign-up/login with role, Descubrir (ads / workers + ratings), swipes as `interests`, Matches and chat (`messages`, polled every 4 s), Publicar (`job_ads`, location fixed to Marbella centre), Agenda (`availability_days`, `available_today`), received reviews. Hiring, payment and giving reviews were still demo there; see the next note.
- 2026-11-14 · claude/guest-browsing (PR open) · Jose · Guests (not signed in) browse real open jobs in Descubrir, with the company's public data and published ratings; ♥ asks them to sign up. Matches, Agenda, Publicar, Reseñas and Perfil show a sign-up prompt instead of demo data. Demo data now only appears when Supabase is not configured. Migration `20261114120522_guest_job_browsing` (applied) lets `anon` read open ads (no location), public company fields (no tax id) and companies' published reviews; professionals stay private. Cache version 11.
- 2026-11-14 · claude/live-hiring-reviews (PR #14, merged) · Jose · Live hiring flow in the chat: the company proposes date, hours, price and method (cash, card or Bizum); the professional accepts or rejects; both confirm the mock payment and the database marks the job completed; then both review from Reseñas › Pendientes de dar (overall, criteria, ¿repetirías?). Migration `20261114113452_live_hiring_support` (already applied) guards status changes and payment confirmations and adds `my_pending_reviews()`. Cache version 10.
- 2026-11-14 · claude/supabase-init (PR #11, merged) · Jose · Supabase project **Kurro** (org Kurro, Free plan, region eu-west-1, ref `ctdynarhmqvxbvcmcbaa`) is the only database for this app; never use the old Cudeca project. The initial schema is applied (see `supabase/migrations/`). Every new migration applied to it must also be committed there with the same version number. Privacy: never store workers' home locations; only ads have a location. Payments are a mock (cash, card, Bizum), no real processing.
- 2026-11-14 · claude/product-decisions (PR #10, merged) · Claude · New "Product decisions" section, applied to the prototype (`index.html`, `app.js`, `styles.css`, cache version 8). `README.md` still describes the buy/sell marketplace and needs updating to match.
- 2026-11-14 · main · Jose · The desktop landing page from the brand board (search bar, featured professionals) is not built yet; the prototype only has the mobile-style app screens.
