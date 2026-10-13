# Updates: Auth UI, Stripe checkout, pricing, invoice form

This commit adds the following features:

- Client pages for login and signup (app/auth/login and app/auth/signup). These call the existing API routes and store JWT and user data in localStorage.
- Pricing page (app/pricing) with Checkout buttons. The page uses environment variables NEXT_PUBLIC_STRIPE_PRICE_PRO and NEXT_PUBLIC_STRIPE_PRICE_PAYROLL to create Checkout Sessions.
- Server API route to create Stripe Checkout sessions (app/api/stripe/checkout/route.ts). It expects a priceId in the request body.
- New invoice creation page (app/invoices/new) with dynamic line items and VAT calculation using lib/burs rates (client-side). Submits to /api/invoices.
- Small auth helper (lib/auth.ts) for token storage.

Notes / next steps:
- Configure Stripe price IDs in Vercel / .env (NEXT_PUBLIC_STRIPE_PRICE_PRO, NEXT_PUBLIC_STRIPE_PRICE_PAYROLL) and STRIPE_SECRET_KEY on server.
- Consider adding server-side protection: verify JWT on API routes and provide endpoints to fetch companyId automatically after login.
- For invoice lines we send tax code placeholders; to calculate precise tax on the server, link taxRate records to invoice lines or resolve codes to taxRate ids server-side.
