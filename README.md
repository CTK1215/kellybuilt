# kellybuilt.dev

My developer portfolio. A single-page site with a case-study page per project, written for recruiters and hiring managers who want to see what I have actually shipped.

Live: [https://kellybuilt.dev](https://kellybuilt.dev)

## What's on the site

| Route | What it is |
|---|---|
| `/` | Hero, Selected Work, Skills & Tech, About, Contact |
| `/work/nursetrack` | Case study: NurseTrack, a home-health scheduling and routing app in daily production use |
| `/work/servesync` | Case study: ServeSync, the multi-tenant .NET 9 and Azure rebuild, in progress |
| `/work/wendellturner` | Case study: wendellturner.com, a live client real-estate site |
| `/work/kellybuilt` | Case study: a retired client-acquisition site, marked archived |
| `/resume.pdf` | Downloadable resume |

## Stack

- Astro 6 (`astro ^6.4.5`), static output, no UI framework integration
- Tailwind CSS 4 (`tailwindcss ^4.3.0`) through `@tailwindcss/vite`
- TypeScript 6 (`typescript ^6.0.3`) on Astro's strict tsconfig, with `@astrojs/check`
- Geist and Geist Mono variable fonts, self-hosted via `@fontsource-variable`
- Node 22.12 or newer (`engines.node` in `package.json`)

## Project structure

```
src/
  content.config.ts        the projects collection schema (zod)
  content/projects/        one markdown file per case study
  assets/                  cover images, processed by astro:assets
  components/              Header, Hero, Work, ProjectCard, Skills, About, Contact, Footer
  layouts/BaseLayout.astro html shell, meta and Open Graph tags, skip link
  pages/index.astro        the home page
  pages/work/[id].astro    case-study route, one page per collection entry
  styles/global.css        Tailwind import, design tokens, dark color scheme
public/                    favicons and resume.pdf, served as-is
```

## Running locally

Prerequisites: Node 22.12 or newer and npm.

```
npm install
npm run dev       # http://localhost:4321
npm run build     # static output to dist/
npm run preview   # serve the build locally
```

No environment variables. There is nothing to configure.

## Deployment

Vercel deploys from the `main` branch on push and serves kellybuilt.dev. There is no `vercel.json` in the repo, so Vercel uses its Astro defaults: `astro build`, with the static `dist/` folder as the output.

## Notes on the implementation

- **Projects are a content collection.** Each case study is a markdown file with typed frontmatter: title, order, status, tech list, an optional cover image, and optional live, demo, repo, and video links. `Work.astro` sorts by `order` and promotes the entry flagged `featured` to a full-width card. `pages/work/[id].astro` builds one static route per entry with `getStaticPaths`. Adding a project means adding one file.
- **Accessibility.** Skip-to-content link, `aria-labelledby` on every section, a mobile menu that manages `aria-expanded`, closes on Escape and returns focus, and closes on outside click. Visible focus rings throughout, and `prefers-reduced-motion` turns off transitions.
- **Almost no client JavaScript.** The only script shipped is the small inline one in `Header.astro` for the scrolled-header state and the mobile menu.
