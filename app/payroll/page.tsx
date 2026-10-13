import { AppShell } from '@/components/AppShell';

export default function PayrollPage() {
  return (
    <AppShell title="Payroll" subtitle="PAYE, salaries, and tax remittance for Botswana employers">
      <div className="upgrade-banner panel">
        <div>
          <div className="eyebrow accent">Upgrade required</div>
          <h2>Payroll and PAYE are available on paid plans</h2>
          <p>
            Unlock employee records, PAYE withholding, salary runs, and monthly ITW remittance support.
          </p>
        </div>
        <button className="primary-btn">Upgrade to Payroll</button>
      </div>

      <div className="feature-grid">
        <div className="panel feature-card">
          <h3>Employees</h3>
          <p>Track employee details, tax status, and payslips.</p>
        </div>
        <div className="panel feature-card">
          <h3>PAYE</h3>
          <p>Automate withholding using BURS tax tables with month-end remittance support.</p>
        </div>
        <div className="panel feature-card">
          <h3>ITW returns</h3>
          <p>Generate annual and monthly employer tax filings for submission to BURS.</p>
        </div>
      </div>
    </AppShell>
  );
}
