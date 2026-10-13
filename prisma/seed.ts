import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seed() {
  const existing = await prisma.company.findFirst();
  if (existing) {
    console.log('Already seeded');
    process.exit(0);
  }

  const user = await prisma.user.create({
    data: { email: 'demo@pulabooks.test', passwordHash: await bcrypt.hash('password', 10), name: 'Demo User' },
  });

  const company = await prisma.company.create({ data: { name: 'Demo Company', baseCurrency: 'BWP', filingMonthly: true } });

  await prisma.companyUser.create({ data: { companyId: company.id, userId: user.id, role: 'admin' } });

  await prisma.taxRate.createMany({
    data: [
      { companyId: company.id, code: 'VAT_14', name: 'Standard VAT', rate: 0.14, startDate: new Date('2023-01-01') },
      { companyId: company.id, code: 'VAT_0', name: 'Zero rated', rate: 0.0, startDate: new Date('2023-01-01') },
      { companyId: company.id, code: 'VAT_EXEMPT', name: 'Exempt', rate: 0.0, startDate: new Date('2023-01-01') },
    ],
  });

  console.log('Seed complete');
  process.exit(0);
}

seed();
