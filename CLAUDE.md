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

Use this palette for all UI work:

| Name | Hex |
|------|-----|
| Stormy Teal | `#006D77` |
| Pearl Aqua | `#83C5BE` |
| Alice Blue | `#EDF6F9` |
| Almond Silk | `#FFDDD2` |
| Tangerine Dream | `#E29578` |

Accessibility: white text on `#E29578` has low contrast (about 2.4:1). Use a dark color (`#006D77`) for text on that background.

## Tech stack

To be decided by the team (see `README.md`). Do not assume a framework or add dependencies without asking.
