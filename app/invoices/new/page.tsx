"use client";

import { bursRates } from '@/lib/burs';

export default function NewInvoicePage() {
  const [companyId, setCompanyId] = (typeof window !== 'undefined' && localStorage.getItem('pb_companyId')) ? (localStorage.getItem('pb_companyId') || '') : '';
  const [contact, setContact] = (typeof window !== 'undefined' && localStorage.getItem('pb_defaultContact')) ? (localStorage.getItem('pb_defaultContact') || '') : '';
  const [invoiceNo, setInvoiceNo] = (typeof window !== 'undefined' && localStorage.getItem('pb_nextInvoice')) ? (localStorage.getItem('pb_nextInvoice') || 'INV-1001') : 'INV-1001';

  const [lines, setLines] = (function () {
    const initial = [{ id: Date.now(), description: '', quantity: 1, unitPrice: 0, taxCode: 'VAT_14' }];
    // @ts-ignore
    return useState(initial);
  })();

  function updateLine(id: any, patch: any) {
    setLines((all: any[]) => all.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  }

  function addLine() {
    setLines((all: any[]) => [...all, { id: Date.now(), description: '', quantity: 1, unitPrice: 0, taxCode: 'VAT_14' }]);
  }

  function removeLine(id: any) {
    setLines((all: any[]) => all.filter((l) => l.id !== id));
  }

  function computeTotals() {
    let subtotal = 0;
    let taxTotal = 0;
    for (const l of lines) {
      const amount = Number(l.quantity || 0) * Number(l.unitPrice || 0);
      subtotal += amount;
      const rateObj = bursRates.find((r) => r.code === l.taxCode);
      const rate = rateObj ? rateObj.rate / 100 : 0;
      taxTotal += amount * rate;
    }
    return { subtotal, taxTotal, total: subtotal + taxTotal };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!companyId) return alert('Set companyId in localStorage (or sign up first)');
    const payload = {
      companyId,
      invoiceNo,
      issueDate: new Date().toISOString(),
      dueDate: null,
      contact,
      lines: lines.map((l: any) => ({ description: l.description, quantity: l.quantity, unitPrice: l.unitPrice, taxRateId: l.taxCode === 'VAT_14' ? null : null })),
    };
    // Note: server expects taxRateId references - for now we use tax code placeholders and server will calculate only if taxRateId provided
    const res = await fetch('/api/invoices', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data = await res.json();
    if (!res.ok) return alert(data.error || 'Failed');
    alert('Invoice created: ' + data.invoice.invoiceNo || data.invoice.id);
    window.location.href = '/invoices';
  }

  const totals = computeTotals();

  return (
    <div style={{ maxWidth: 900, margin: '28px auto' }}>
      <h2>New invoice</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, marginTop: 12 }}>
        <label>
          Company ID
          <input value={companyId} onChange={(e) => setCompanyId(e.target.value)} placeholder="company id (stored on signup)" />
        </label>
        <label>
          Invoice number
          <input value={invoiceNo} onChange={(e) => typeof window !== 'undefined' && (localStorage.setItem('pb_nextInvoice', e.target.value), setInvoiceNo(e.target.value))} />
        </label>
        <label>
          Contact
          <input value={contact} onChange={(e) => setContact(e.target.value)} />
        </label>

        <div>
          <h4>Line items</h4>
          {lines.map((l: any) => (
            <div key={l.id} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 120px 160px 40px', gap: 8, marginBottom: 8 }}>
              <input value={l.description} onChange={(e) => updateLine(l.id, { description: e.target.value })} placeholder="Description" />
              <input type="number" value={l.quantity} onChange={(e) => updateLine(l.id, { quantity: Number(e.target.value) })} />
              <input type="number" value={l.unitPrice} onChange={(e) => updateLine(l.id, { unitPrice: Number(e.target.value) })} />
              <select value={l.taxCode} onChange={(e) => updateLine(l.id, { taxCode: e.target.value })}>
                {bursRates.map((r) => (
                  <option key={r.code} value={r.code}>{r.name} ({r.rate}%)</option>
                ))}
              </select>
              <button type="button" onClick={() => removeLine(l.id)} className="ghost-btn">✕</button>
            </div>
          ))}
          <button type="button" onClick={addLine} className="primary-btn" style={{ marginTop: 8 }}>Add line</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
          <div style={{ textAlign: 'right' }}>
            <div>Subtotal: <strong>BWP {totals.subtotal.toFixed(2)}</strong></div>
            <div>Tax: <strong>BWP {totals.taxTotal.toFixed(2)}</strong></div>
            <div>Total: <strong>BWP {totals.total.toFixed(2)}</strong></div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button className="primary-btn" type="submit">Create invoice</button>
          <a href="/invoices" className="ghost-btn" style={{ padding: '10px 16px' }}>Cancel</a>
        </div>
      </form>
    </div>
  );
}
