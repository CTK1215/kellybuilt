# kellybuilt (portfolio)

The live developer portfolio at [kellybuilt.dev](https://kellybuilt.dev). Astro static site.

- Remote: `git@github.com:CTK1215/kellybuilt.git`
- Vercel project: **`portfolio`** (the project label was never renamed, the domain and repo are correct)

Job-search context lives in the vault: `06 - Kellybuilt/` and `Active Priorities.md` under `#job-search`.

## Naming history, settled 2026-07-31

This folder used to be called `portfolio`, and a **different** retired project held the name `kellybuilt`. Everything now agrees:

```
dev\kellybuilt  ->  CTK1215/kellybuilt  ->  Vercel "portfolio"  ->  kellybuilt.dev
```

The retired Next.js client-acquisition site (Cal.com booking, productized pricing, before/after slider) now lives at `_archive\kellybuilt-client-site` with remote `CTK1215/kellybuilt-client-site`. It is **not** this project and is no longer served anywhere.

## Stack

| Layer | Tech |
|---|---|
| Framework | Astro (static output) |
| Styling | Tailwind |
| Fonts | Fontsource Geist + Geist Mono (self-hosted) |
| Content | Astro content collections, `src/content/projects/*.md` |
| Hosting | Vercel |

## Commands

- `npm run dev` - dev server
- `npm run build` - static build
- `npm run preview` - serve the build locally

## How projects work

Each project is one markdown file in `src/content/projects/`. `Work.astro` globs the whole folder via `getCollection("projects")` and sorts by the `order` field, so **adding or removing a project is adding or removing a file.** Nothing is hardcoded.

Frontmatter is schema-validated in `src/content.config.ts`. Required: `title`, `order`, `status`, `tagline`, `summary`, `tech`. Optional: `featured`, `cover`, `links`. `statusKind` must be one of `production`, `in-progress`, `live`.

Cover images live in `src/assets/` and are referenced by relative path so Astro can optimize them. Removing a project means removing its cover too, or it sits orphaned.

## Working on this site

**This is the portfolio a hiring manager reads.** Chris is actively job hunting for a software engineer role at $60-70k. Accuracy matters more here than anywhere else in the repo set.

- Never claim a project is `status: "Live"` unless the link actually resolves to that project.
- Never inflate metrics. The Lighthouse numbers quoted in project files are real measurements, not targets.
- Do not describe Chris as running a studio or taking client work unless he says that is current. It is not.
- The global writing rules apply to every word that ships here, including no em dashes.
