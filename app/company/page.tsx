import { AppShell } from '@/components/AppShell';

export default function CompanyPage() {
  return (
    <AppShell title="Company" subtitle="Manage your Botswana company profile and accounting settings">
      <div className="content-grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Company profile</h3>
          </div>
          <div className="form-grid">
            <label>
              Company name
              <input defaultValue="Bokamoso Trading" />
            </label>
            <label>
              Business type
              <input defaultValue="Retail & Services" />
            </label>
            <label>
              VAT registration number
              <input defaultValue="BWVAT-20451" />
            </label>
            <label>
              Physical address
              <input defaultValue="Gaborone, Botswana" />
            </label>
            <label>
              Currency
              <input defaultValue="BWP" />
            </label>
            <label>
              Filing frequency
              <input defaultValue="Monthly" />
            </label>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Tax setup</h3>
          </div>
          <div className="summary-blocks compact">
            <div>
              <label>Standard VAT</label>
              <strong>14%</strong>
            </div>
            <div>
              <label>Zero rated</label>
              <strong>0%</strong>
            </div>
            <div>
              <label>Exempt</label>
              <strong>0%</strong>
            </div>
            <div>
              <label>Payroll</label>
              <strong>Paid only</strong>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
