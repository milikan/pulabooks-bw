"use client";

import { useState } from 'react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('/api/auth/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password, name, companyName }) });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'Signup failed');
      localStorage.setItem('pb_token', data.token);
      localStorage.setItem('pb_user', JSON.stringify(data.user));
      if (data.companyId) localStorage.setItem('pb_companyId', data.companyId);
      window.location.href = '/';
    } catch (err: any) {
      setError(err.message || 'Network error');
    }
  }

  return (
    <div style={{ maxWidth: 560, margin: '40px auto' }}>
      <h2>Create a company</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, marginTop: 12 }}>
        <label>
          Your name
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        </label>
        <label>
          Password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
        </label>
        <label>
          Company name
          <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        </label>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="primary-btn" type="submit">Create account</button>
          <a href="/auth/login" className="ghost-btn" style={{ padding: '10px 16px' }}>Have an account?</a>
        </div>
      </form>
    </div>
  );
}
