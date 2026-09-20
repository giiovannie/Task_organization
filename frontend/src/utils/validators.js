export const isRequired = (value) => String(value ?? '').trim().length > 0

export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export const isStrongPassword = (value) => value.length >= 8

export const validateLogin = ({ email, password }) => {
  const errors = {}
  if (!isRequired(email)) errors.email = 'Ingresá tu email.'
  else if (!isValidEmail(email)) errors.email = 'Ingresá un email válido.'
  if (!isRequired(password)) errors.password = 'Ingresá tu contraseña.'
  return errors
}

export const validateRegistration = ({ email, password, confirmation }) => {
  const errors = validateLogin({ email, password })
  if (password && !isStrongPassword(password)) errors.password = 'Usá al menos 8 caracteres.'
  if (password !== confirmation) errors.confirmation = 'Las contraseñas no coinciden.'
  return errors
}

export const hasErrors = (errors) => Object.keys(errors).length > 0
