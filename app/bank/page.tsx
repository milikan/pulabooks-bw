import { AppShell } from '@/components/AppShell';

export default function BankPage() {
  return (
    <AppShell title="Bank" subtitle="Import bank statements and reconcile transactions">
      <div className="content-grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Bank import</h3>
          </div>
          <div className="upload-box">
            <div className="upload-icon">⬆</div>
            <p>Drop your CSV or bank statement here</p>
            <button className="primary-btn">Upload statement</button>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Payment methods</h3>
          </div>
          <ul className="payment-list">
            <li>Orange Money</li>
            <li>MyZaka</li>
            <li>Bank transfer</li>
            <li>Visa / Mastercard</li>
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
