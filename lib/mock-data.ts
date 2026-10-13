export const summaryCards = [
  { title: 'Revenue', value: 'BWP 218,400', change: '+12.4% vs last month', trendDirection: 'positive' },
  { title: 'Expenses', value: 'BWP 134,980', change: '-3.1% vs last month', trendDirection: 'negative' },
  { title: 'Outstanding', value: 'BWP 41,200', change: '12 invoices due', trendDirection: 'neutral' },
  { title: 'Cash balance', value: 'BWP 96,540', change: '+8.7% vs last month', trendDirection: 'positive' },
];

export const recentActivity = [
  { id: 1, title: 'Invoice INV-1042 sent', meta: 'To Kamohelo Traders', time: '2h ago' },
  { id: 2, title: 'VAT return generated', meta: 'April 2026 return ready', time: 'Today' },
  { id: 3, title: 'Payment received', meta: 'BWP 12,500 from Gaborone Mart', time: 'Yesterday' },
  { id: 4, title: 'Supplier bill recorded', meta: 'Office supplies', time: '2d ago' },
];

export const quickActions = [
  { icon: '✦', label: 'New invoice', note: 'Send to a customer' },
  { icon: '◌', label: 'Add contact', note: 'Create a customer or supplier' },
  { icon: '↗', label: 'Bank import', note: 'Reconcile transactions' },
  { icon: '▣', label: 'Create journal', note: 'Record adjustments' },
];

export const startupMetrics = [
  { label: 'Gross margin', value: '42%' },
  { label: 'Tax collected', value: 'BWP 56,900' },
  { label: 'Paid invoices', value: '81%' },
  { label: 'Avg. payment time', value: '8 days' },
];

export const invoiceData = [
  { id: 1, number: 'INV-1042', customer: 'Kamohelo Traders', date: '05 Apr 2026', status: 'paid', amount: 'BWP 12,500' },
  { id: 2, number: 'INV-1043', customer: 'Motsamai Retail', date: '06 Apr 2026', status: 'sent', amount: 'BWP 8,900' },
  { id: 3, number: 'INV-1044', customer: 'Gaborone Mart', date: '07 Apr 2026', status: 'draft', amount: 'BWP 6,200' },
  { id: 4, number: 'INV-1045', customer: 'Pula Supplies', date: '09 Apr 2026', status: 'overdue', amount: 'BWP 14,800' },
];

export const contactsData = [
  { name: 'Kamohelo Traders', type: 'Customer', phone: '+267 71 234 567', email: 'billing@kamohelo.co.bw', balance: 'BWP 3,250' },
  { name: 'Motsamai Retail', type: 'Customer', phone: '+267 71 454 543', email: 'sales@motsamai.co.bw', balance: 'BWP 8,970' },
  { name: 'Pula Supplies', type: 'Supplier', phone: '+267 71 620 800', email: 'orders@pulasupplies.co.bw', balance: 'BWP 6,400' },
  { name: 'Gaborone Mart', type: 'Customer', phone: '+267 72 120 456', email: 'accounts@gaboronemart.bw', balance: 'BWP 14,800' },
];
