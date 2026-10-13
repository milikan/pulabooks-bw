import { AppShell } from '@/components/AppShell';
import { contactsData } from '@/lib/mock-data';

export default function ContactsPage() {
  return (
    <AppShell title="Contacts" subtitle="Customers, suppliers, and core business relationships">
      <div className="toolbar panel">
        <div>
          <div className="eyebrow accent">People</div>
          <h3>Directory</h3>
        </div>
        <button className="primary-btn">+ Add contact</button>
      </div>

      <div className="panel table-panel">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {contactsData.map((contact) => (
              <tr key={contact.name}>
                <td>{contact.name}</td>
                <td>{contact.type}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>{contact.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
