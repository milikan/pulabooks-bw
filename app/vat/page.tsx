import { AppShell } from '@/components/AppShell';
import { bursRates, filingReminders } from '@/lib/burs';

export default function VatPage() {
  return (
    <AppShell title="VAT Returns" subtitle="BURS tax rates and filing support for Botswana businesses">
      <div className="stats-grid">
        {bursRates.map((rate) => (
          <div className="stat-card" key={rate.code}>
            <div className="eyebrow">{rate.name}</div>
            <div className="stat-value">{rate.rate}%</div>
            <div className="stat-trend positive">{rate.code}</div>
          </div>
        ))}
      </div>

      <div className="content-grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Current filing period</h3>
            <button className="ghost-btn">Generate return</button>
          </div>
          <div className="summary-blocks">
            <div>
              <label>Period</label>
              <strong>April 2026</strong>
            </div>
            <div>
              <label>Due date</label>
              <strong>28 May 2026</strong>
            </div>
            <div>
              <label>Output VAT</label>
              <strong>BWP 18,420.50</strong>
            </div>
            <div>
              <label>Input VAT</label>
              <strong>BWP 11,200.00</strong>
            </div>
            <div>
              <label>Net VAT</label>
              <strong>BWP 7,220.50</strong>
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Filing reminders</h3>
          </div>
          <ul className="reminder-list">
            {filingReminders.map((item) => (
              <li key={item.title}>
                <span className="reminder-tag">{item.tag}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
