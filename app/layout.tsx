import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PulaBooks BW',
  description: 'Accounting app for Botswana with BURS VAT and payroll support.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
