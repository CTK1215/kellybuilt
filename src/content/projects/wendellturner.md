---
title: "wendellturner.com"
order: 3
featured: false
status: "Live · Client project"
statusKind: "live"
tagline: "A 188-page real-estate site with live MLS listings, AI tools, and an automated lead pipeline."
summary: "A Next.js site for a Coachella Valley broker: 188 SEO landing pages, live IDX/MLS integration, AI listing-description and valuation tools with fair-housing guardrails, and an IDX→HubSpot lead pipeline running on a Vercel cron."
tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "HubSpot API", "Claude API"]
links: { live: "https://wendellturner.com" }
---

A real-estate website for a Coachella Valley broker, built to generate leads through live MLS listings and deep local SEO. Shipped and live.

## The problem
The broker needed more than a brochure site — live MLS listings, landing pages that rank for dozens of local neighborhoods, and a way to capture and route inquiries automatically.

## What I built
A 188-page Next.js site with a geographic hierarchy — 4 regions, 27 cities, and 128+ neighborhoods — each with its own SEO-optimized landing page. Live MLS listings come from IDX Broker, with custom Next.js filter controls (price, beds, baths) layered over the IDX content. Two AI tools — a listing-description generator and a home-valuation estimator — run on the Claude API, with fair-housing guardrails built into the prompts. Leads are captured across multiple channels and synced automatically into HubSpot.

## How it works
Next.js 14 (App Router) with TypeScript and Tailwind, statically generated across 188 routes and deployed on Vercel. A Vercel Cron job polls IDX every 30 minutes and syncs new leads into HubSpot with custom properties for lead type, source, and search criteria. Schema.org JSON-LD markup runs site-wide for SEO.

## Impact
The site is live and indexed — all 188 pages discovered in Google Search Console — with automated lead capture and an IDX-to-HubSpot pipeline running on schedule. Real client work, in production.
