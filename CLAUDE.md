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

| Role | Name | Hex | Use |
|------|------|-----|-----|
| Accent | Pink | `#F18AB5` | Main buttons, highlights, the logo dot |
| Primary | Deep teal | `#175C68` | Active states, links, secondary buttons |
| Background | Cream | `#F3E8DC` | Page background |
| Text | Dark | `#382B30` | Main text, titles |
| Support | Sage | `#A5B9A5` | Borders, soft backgrounds, details |

Accessibility: white text on pink `#F18AB5` fails contrast (about 2.4:1). Put dark text (`#382B30`) on pink buttons and tags.

### Typography

- Titles: **Plus Jakarta Sans** (600 to 800).
- Body and secondary text: **Inter** (400 to 700).

### How colors are applied in code

- Never hardcode hex colors in components. Use the CSS tokens defined in `styles.css` (`--bg`, `--surface`, `--primary`, `--on-primary`, `--accent`, `--on-accent`, `--accent-soft`, `--warm-ink`, `--sage`, `--c-sage`, `--c-pink`, `--c-warm`, `--ink`, `--muted`).
- `themes.css` holds pale variants for workers who use the app at night, at dawn or during the day: `algodon`, `petroleo`, `salvia` and `crema`, each with `light` and `dark` mode. Select one with `index.html?theme=<name>&mode=light|dark`. Without parameters, the brand defaults apply.
- New themes must define every token and keep text contrast at WCAG AA (4.5:1).
- `preview.html` shows every theme side by side.

## Tech stack

Current prototype: plain HTML, CSS and JavaScript (no framework, no backend), published with GitHub Pages from `main` at https://ocxpke.github.io/kurro/. Fonts load from Google Fonts. The final stack is still to be decided: do not assume a framework or add dependencies without asking.
