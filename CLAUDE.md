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

## Design (UI/UX)

Brand: **kurro.** (lowercase wordmark, the final dot in pink). Tagline: "El talento local nos conecta."

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

Current prototype: plain HTML, CSS and JavaScript (no framework, no backend), published with GitHub Pages from `main` at https://ocxpke.github.io/kurro/. Fonts load from Google Fonts. The final stack is still to be decided: do not assume a framework or add dependencies without asking.

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

- 2026-11-14 · claude/supabase-init (PR open) · Jose · Supabase project **Kurro** (org Kurro, Free plan, region eu-west-1, ref `ctdynarhmqvxbvcmcbaa`) is the only database for this app; never use the old Cudeca project. Every migration applied to it must also be committed in `supabase/migrations/` with the same version number.
- 2026-11-14 · main · Jose · The desktop landing page from the brand board (search bar, featured professionals) is not built yet; the prototype only has the mobile-style app screens.
