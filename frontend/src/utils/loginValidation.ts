export interface LoginValidationResult {
  usernameError: string | null
  passwordError: string | null
}

export function validateLoginForm(username: string, password: string): LoginValidationResult {
  let usernameError: string | null = null
  let passwordError: string | null = null

  const trimmedUsername = username.trim()
  const trimmedPassword = password.trim()

  if (!trimmedUsername) {
    usernameError = 'Tên đăng nhập không được để trống'
  } else if (!/^[a-zA-Z0-9_]+$/.test(trimmedUsername)) {
    usernameError = 'tên đăng nhập không hợp lệ'
  }

  if (!trimmedPassword) {
    passwordError = 'Mật khẩu là bắt buộc'
  } else if (trimmedPassword.length < 6) {
    passwordError = 'Mật khẩu tối thiểu 6 ký tự'
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(trimmedPassword)) {
    passwordError = 'Mật khẩu không đúng định dạng'
  }

  return { usernameError, passwordError }
}


