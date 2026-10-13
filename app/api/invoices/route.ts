import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { companyId, invoiceNo, issueDate, dueDate, contact, lines } = await request.json();
    if (!companyId || !invoiceNo || !issueDate || !lines || !Array.isArray(lines)) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // compute totals and tax per line
    let subtotal = 0;
    let taxTotal = 0;

    const createLines = [] as any[];
    for (const l of lines) {
      const qty = Number(l.quantity || 1);
      const unitPrice = Number(l.unitPrice || 0);
      const amount = qty * unitPrice;
      subtotal += amount;

      let taxAmount = 0;
      if (l.taxRateId) {
        const rate = await prisma.taxRate.findUnique({ where: { id: l.taxRateId } });
        if (rate) {
          taxAmount = amount * rate.rate;
          taxTotal += taxAmount;
        }
      }

      createLines.push({ description: l.description, quantity: qty, unitPrice, amount, taxRateId: l.taxRateId || null, taxAmount });
    }

    const total = subtotal + taxTotal;

    const invoice = await prisma.invoice.create({
      data: {
        companyId,
        invoiceNo,
        issueDate: new Date(issueDate),
        dueDate: dueDate ? new Date(dueDate) : null,
        contact: contact || null,
        subtotal,
        taxTotal,
        total,
        lines: { create: createLines },
      },
      include: { lines: true },
    });

    return NextResponse.json({ invoice });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
