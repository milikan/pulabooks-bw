import { AppShell } from '@/components/AppShell';
import { invoiceData } from '@/lib/mock-data';

export default function InvoicesPage() {
  return (
    <AppShell title="Invoices" subtitle="Create, send, and track customer invoices">
      <div className="toolbar panel">
        <div>
          <div className="eyebrow accent">Sales</div>
          <h3>Invoice register</h3>
        </div>
        <button className="primary-btn">+ New invoice</button>
      </div>

      <div className="panel table-panel">
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.number}</td>
                <td>{invoice.customer}</td>
                <td>{invoice.date}</td>
                <td>
                  <span className={`status-pill ${invoice.status}`}>{invoice.status}</span>
                </td>
                <td>{invoice.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
