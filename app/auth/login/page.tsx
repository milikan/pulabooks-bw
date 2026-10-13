"use client";

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      if (!res.ok) return setError(data.error || 'Login failed');
      localStorage.setItem('pb_token', data.token);
      localStorage.setItem('pb_user', JSON.stringify(data.user));
      // if companyId present in response (signup flow) store it
      if (data.companyId) localStorage.setItem('pb_companyId', data.companyId);
      window.location.href = '/';
    } catch (err: any) {
      setError(err.message || 'Network error');
    }
  }

  return (
    <div style={{ maxWidth: 560, margin: '40px auto' }}>
      <h2>Sign in to PulaBooks</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12, marginTop: 12 }}>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        </label>
        <label>
          Password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
        </label>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="primary-btn" type="submit">Sign in</button>
          <a href="/auth/signup" className="ghost-btn" style={{ padding: '10px 16px' }}>Create account</a>
        </div>
      </form>
    </div>
  );
}
