export function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('pb_token');
}

export function setToken(token: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('pb_token', token);
}

export function clearAuth() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('pb_token');
  localStorage.removeItem('pb_user');
  localStorage.removeItem('pb_companyId');
}
