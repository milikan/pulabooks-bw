import { AppShell } from '@/components/AppShell';
import { summaryCards, recentActivity, quickActions, startupMetrics } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <AppShell title="Dashboard" subtitle="A quick view of your company performance">
      <div className="stats-grid">
        {summaryCards.map((card) => (
          <div className="stat-card" key={card.title}>
            <div className="eyebrow">{card.title}</div>
            <div className="stat-value">{card.value}</div>
            <div className={`stat-trend ${card.trendDirection}`}>{card.change}</div>
          </div>
        ))}
      </div>

      <div className="hero-panel panel">
        <div>
          <div className="eyebrow accent">This month</div>
          <h2>VAT snapshot</h2>
          <p>
            Output VAT: <strong>BWP 18,420.50</strong> · Input VAT: <strong>BWP 11,200.00</strong>
          </p>
        </div>
        <button className="primary-btn">Generate VAT Return</button>
      </div>

      <div className="content-grid two-col">
        <div className="panel">
          <div className="panel-header">
            <h3>Recent activity</h3>
            <button className="ghost-btn">View all</button>
          </div>
          <div className="activity-list">
            {recentActivity.map((item) => (
              <div className="activity-item" key={item.id}>
                <div className="dot" />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.meta}</p>
                </div>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Quick actions</h3>
          </div>
          <div className="quick-actions">
            {quickActions.map((action) => (
              <div className="quick-action" key={action.label}>
                <div className="action-icon">{action.icon}</div>
                <div>
                  <strong>{action.label}</strong>
                  <p>{action.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="panel metrics-panel">
        <div className="panel-header">
          <h3>Startup metrics</h3>
          <button className="ghost-btn">Export</button>
        </div>
        <div className="metrics-grid">
          {startupMetrics.map((metric) => (
            <div className="metric-box" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
