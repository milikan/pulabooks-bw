"use client";

export default function PricingPage() {
  const PRO_PRICE = process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO || '';
  const PAYROLL_PRICE = process.env.NEXT_PUBLIC_STRIPE_PRICE_PAYROLL || '';

  async function checkout(priceId: string) {
    if (!priceId) return alert('Price not configured. Set NEXT_PUBLIC_STRIPE_PRICE_PRO in environment.');
    const res = await fetch('/api/stripe/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ priceId }) });
    const data = await res.json();
    if (!res.ok) return alert(data.error || 'Checkout error');
    if (data.url) window.location.href = data.url;
  }

  return (
    <div style={{ maxWidth: 980, margin: '28px auto' }}>
      <h2>Pricing</h2>
      <p>Choose a plan to unlock advanced features and payroll.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 18 }}>
        <div className="panel">
          <div style={{ padding: 18 }}>
            <h3>Free</h3>
            <p>Invoicing, VAT returns, bank import (manual), 1 company</p>
            <div style={{ marginTop: 12 }}>
              <button className="ghost-btn">Start free</button>
            </div>
          </div>
        </div>

        <div className="panel">
          <div style={{ padding: 18 }}>
            <h3>Growth</h3>
            <p>Everything in Free plus multi-company, reporting, automated bank import</p>
            <div style={{ marginTop: 12 }}>
              <button className="primary-btn" onClick={() => checkout(PRO_PRICE)}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18 }} className="panel">
        <div style={{ padding: 18 }}>
          <h3>Payroll add-on</h3>
          <p>Add PAYE, payslips, and ITW remittance. (Paid add-on)</p>
          <div style={{ marginTop: 12 }}>
            <button className="primary-btn" onClick={() => checkout(PAYROLL_PRICE)}>Add payroll</button>
          </div>
        </div>
      </div>
    </div>
  );
}
