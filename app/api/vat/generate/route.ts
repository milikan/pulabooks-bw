import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { companyId, periodStart, periodEnd } = await request.json();
    if (!companyId || !periodStart || !periodEnd) return NextResponse.json({ error: 'Missing' }, { status: 400 });

    const start = new Date(periodStart);
    const end = new Date(periodEnd);

    // output tax: sum of taxAmount for invoices in period
    const output = await prisma.invoiceLine.aggregate({
      _sum: { taxAmount: true },
      where: {
        invoice: {
          companyId,
          issueDate: { gte: start, lte: end },
          status: { not: 'draft' },
        },
      },
    });

    // input tax: for purchases we would have separate purchase invoices; for now assume none
    const input = { _sum: { taxAmount: 0 } } as any;

    const outputTax = Number(output._sum.taxAmount || 0);
    const inputTax = Number(input._sum.taxAmount || 0);
    const netVat = outputTax - inputTax;

    const vatReturn = await prisma.vatReturn.create({
      data: {
        companyId,
        periodStart: start,
        periodEnd: end,
        outputTax,
        inputTax,
        adjustments: 0,
        netVat,
      },
    });

    return NextResponse.json({ vatReturn });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
