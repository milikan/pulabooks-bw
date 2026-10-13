# README

PulaBooks BW is a Botswana-focused accounting starter application for small businesses and SMEs.

Features included in the starter app:
- Dashboard with KPI cards and recent activity
- Company profile and settings
- Invoices overview
- Contacts directory
- Bank import / payment method panel
- VAT return page with BURS tax rates and filing reminders
- Payroll page with upgrade lock for PAYE
- Vibrant dashboard styling for Botswana users

## Stack
- Next.js 14 + TypeScript
- Node.js
- Local styling with CSS (no extra UI library required)

## Local preview

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Environment
This starter uses no external service credentials yet. The app is designed to be extended with Stripe, database, and payment integrations.

## Deployment to Vercel
1. Push this repo to GitHub.
2. Open Vercel.
3. Import the repo.
4. Use the default Next.js settings.
5. Deploy.

## BURS defaults included
- Standard VAT: 14%
- Zero-rated VAT: 0%
- Exempt VAT: 0%
- Monthly or bi-monthly filing guidance included in the VAT page
- Payroll is shown as a paid-only upgrade in the app

## Notes
This is a polished starter prototype for your business idea. It is designed to help you validate the app and present a working preview before integrating billing, database persistence, and real BURS reporting workflows.
