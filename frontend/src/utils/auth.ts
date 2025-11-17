// Simple auth helper to centralize sessionStorage access and emit events
// Using sessionStorage instead of localStorage for better security (token cleared on tab close)
export function setAuth(token: string, username?: string, persist = false) {
  // persist=false -> sessionStorage (default)
  // persist=true -> localStorage (remember me)
  const storage = persist ? localStorage : sessionStorage
  storage.setItem('token', token)
  if (username) {
    storage.setItem('username', username)
  }
  storage.setItem('isAuthenticated', 'true')
  try {
    window.dispatchEvent(new CustomEvent('authChanged'))
  } catch (e) {
    // ignore
  }
}

export function clearAuth() {
  // remove from both storages
  try {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('isAuthenticated')
  } catch (e) {}
  try {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('isAuthenticated')
  } catch (e) {}
  try {
    window.dispatchEvent(new CustomEvent('authChanged'))
  } catch (e) {}
}

export function getToken(): string | null {
  return sessionStorage.getItem('token') || localStorage.getItem('token')
}

export function getUsername(): string | null {
  return sessionStorage.getItem('username') || localStorage.getItem('username')
}

export function isAuthenticated(): boolean {
  return (sessionStorage.getItem('isAuthenticated') === 'true') || (localStorage.getItem('isAuthenticated') === 'true')
}
