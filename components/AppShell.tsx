const navItems = [
  { href: '/', label: 'Dashboard', icon: '◫' },
  { href: '/company', label: 'Company', icon: '⌂' },
  { href: '/invoices', label: 'Invoices', icon: '▣' },
  { href: '/contacts', label: 'Contacts', icon: '◎' },
  { href: '/vat', label: 'VAT Returns', icon: '◍' },
  { href: '/bank', label: 'Bank', icon: '◭' },
  { href: '/payroll', label: 'Payroll', icon: '◔' },
];

export type ScreenProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function AppShell({ title, subtitle, children }: ScreenProps) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">P</div>
          <div>
            <strong>PulaBooks</strong>
            <span>BW</span>
          </div>
        </div>

        <nav>
          {navItems.map((item) => (
            <a href={item.href} key={item.label} className="nav-item">
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer panel mini-panel">
          <div className="eyebrow">Plan</div>
          <strong>Growth</strong>
          <button className="primary-btn small-btn">Upgrade</button>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <div className="eyebrow">Accounting</div>
            <h1>{title}</h1>
          </div>
          <div className="topbar-actions">
            <button className="ghost-btn">Search</button>
            <button className="primary-btn">New invoice</button>
          </div>
        </header>

        {subtitle && <p className="subtitle">{subtitle}</p>}
        {children}
      </main>
    </div>
  );
}
