export const PASSWORD_MIN_LENGTH = 6

export function sanitizeUsername(username: unknown): string {
  if (typeof username !== 'string') return ''
  return username.trim()
}

export function validateRegistrationInput(username: unknown, password: unknown, confirm: unknown): { valid: boolean; error?: string } {
  const name = sanitizeUsername(username)
  if (!name) return { valid: false, error: 'Tên đăng nhập không được để trống' }

  if (typeof password !== 'string') return { valid: false, error: 'Mật khẩu không hợp lệ' }
  if (password.length < PASSWORD_MIN_LENGTH) return { valid: false, error: `Mật khẩu phải có ít nhất ${PASSWORD_MIN_LENGTH} ký tự` }

  if (typeof confirm !== 'string' || password !== confirm) return { valid: false, error: 'Mật khẩu xác nhận không khớp' }

  return { valid: true }
}

export function markRegisterSuccess() {
  localStorage.setItem('registerSuccess', 'true')
}
