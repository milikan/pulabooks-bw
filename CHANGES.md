Update notes:

- Added Prisma schema and Prisma client setup (lib/prisma.ts).
- Added API routes for signup, login, invoices creation, VAT return generation, and Stripe webhook placeholder.
- Added Prisma seed script to create a demo company and seed BURS tax rates (14%, zero, exempt).
- Updated package.json with Prisma and DB scripts; added dependencies for Prisma, bcryptjs, jsonwebtoken, stripe, and pg.
- Added Postgres service to docker-compose for local development.

Next steps locally:
1. Copy environment file and set values:
   cp .env.example .env
   # Edit .env and set JWT_SECRET and STRIPE keys

2. Start Postgres + app (dev):
   docker compose up --build

3. In another shell (after the DB is up), run Prisma migrate / push and seed:
   npm run generate
   npm run db:push
   npm run seed

4. Start the Next.js dev server (if not started by docker):
   npm install
   npm run dev

5. Open http://localhost:3000

If you want, I can run a follow-up to add:
- Stripe Checkout / Billing portal integration and sample products/plans
- Full invoice creation UI with form binding and VAT selection
- Authentication middleware (protected routes) and frontend login flow
- Tests and CI integration

Which one should I implement next?