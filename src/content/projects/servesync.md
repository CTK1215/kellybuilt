---
title: "ServeSync"
order: 2
featured: false
status: "In progress"
statusKind: "in-progress"
tagline: "The commercial rebuild — a multi-tenant .NET 8 + Azure platform for home-health field work."
summary: "NurseTrack re-architected as a sellable product: an ASP.NET Core API on Azure with a multi-tenant ownership model, a pay-calculation engine, server-side route optimization, audit logging, and a type-safe React Native client. Built for HIPAA compliance from the ground up."
tech: ["C#", ".NET 8", "EF Core", "Azure", "MySQL", "React Native"]
links: {}
---

ServeSync is the ground-up rebuild of NurseTrack as a real, multi-tenant product I can sell to other agencies — built in C# on .NET and Azure. It's in active development.

## Why a rebuild
NurseTrack proved the concept in production, but its first version (Firebase + Google Sheets + serverless glue) was an MVP: single-tenant and hard to scale or sell. ServeSync re-architects it properly.

## What I'm building
An ASP.NET Core (.NET 8) API on Azure that powers a new, type-safe React Native client. A hybrid ownership model lets each visit, client, and pay period belong either to a solo worker or to a managed agency. Core pieces include a pay-calculation engine with multi-tier rate fallbacks that snapshots earnings so historical pay doesn't drift when rates change, server-side route optimization (Haversine plus a 2-opt heuristic with a Google Directions fallback), automatic mileage rollups, and vitals validation against clinical thresholds.

## Engineering
C# / .NET 8 with EF Core over MySQL Flexible Server on Azure App Service. JWT auth bridged to a Firebase identity layer. The API auto-generates its OpenAPI spec on every push via GitHub Actions, and the mobile client consumes it as generated TypeScript types for an end-to-end type-safe contract. Migrations run non-blocking at startup, transactions use Azure-resilient execution strategies, and audit logging runs on a separate database through middleware that never blocks the main request. Built for HIPAA compliance, including a signed Azure BAA and encrypted blob storage for photos.

## Status
In active development. The backend, data model, and core mobile screens are working; the remaining work is polishing the client and completing the path to a sellable, multi-tenant release.
