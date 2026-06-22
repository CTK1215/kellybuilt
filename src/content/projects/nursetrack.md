---
title: "NurseTrack"
order: 1
featured: true
status: "In daily production use"
statusKind: "production"
tagline: "Scheduling and route optimization for a home-health field nurse — running in production every day."
summary: "A React Native field app and React admin dashboard that plan a nurse's day, optimize driving routes, auto-track mileage, and use AI to read wound photos and intake documents. Built to solve a real problem at the home-health agency where I work — and in daily use now."
tech: ["React Native", "Expo", "React", "TypeScript", "Firebase", "Google Maps Platform"]
links: {}
---

NurseTrack started as a fix for a problem at my own job: a home-health field nurse losing hours each day to scheduling, routing, mileage logging, and intake paperwork. It's now in production use every single day.

## The problem
Field nurses spend a large share of the day on logistics rather than care — deciding which patients to see and in what order, driving between scattered visits, logging mileage for reimbursement, and processing intake documents. At the agency where I work, this was handled with spreadsheets and guesswork.

## What I built
A two-part system: a React Native (Expo) app the nurse uses in the field, and a React admin dashboard for scheduling and oversight. The app plans the day's visits, optimizes the driving route, tracks mileage automatically, captures vitals and wound photos, and uses AI to read intake documents and analyze wound images. The admin handles scheduling and patient management and keeps everything in sync in real time.

## How it works
The mobile app is React Native + Expo + TypeScript, shipped via EAS Build with over-the-air updates and TestFlight. The admin is React on Vercel, backed by serverless functions that handle route optimization (Google Maps Geocoding, Distance Matrix, and Routes), mileage calculation, AI document and wound-photo analysis (Claude API), schedule extraction, and SMS notifications (Twilio). Data is stored in Firebase with a real-time sync layer.

## Impact
NurseTrack runs reliably every day and noticeably cuts the time the nurse spends planning routes and tracking mileage. It proved the concept well enough that I'm now rebuilding it as a commercial, multi-tenant product — see ServeSync.

## A note on privacy
Because NurseTrack handles real patient information (PHI under HIPAA), every screenshot and demo here uses synthetic data only. No real patient data is shown anywhere, and the production app is not publicly linked.
