import { describe, expect, it } from 'vitest'
import { hasErrors, isStrongPassword, isValidEmail, validateLogin, validateRegistration } from './validators.js'

describe('validadores de formularios', () => {
  it('acepta emails válidos y rechaza formatos incompletos', () => {
    expect(isValidEmail('alumna@example.com')).toBe(true)
    expect(isValidEmail('alumna@')).toBe(false)
  })

  it('exige contraseñas de ocho caracteres para registro', () => {
    expect(isStrongPassword('12345678')).toBe(true)
    expect(isStrongPassword('123')).toBe(false)
  })

  it('informa campos faltantes en login', () => {
    const errors = validateLogin({ email: '', password: '' })
    expect(errors).toEqual({ email: 'Ingresá tu email.', password: 'Ingresá tu contraseña.' })
    expect(hasErrors(errors)).toBe(true)
  })

  it('valida confirmación y formato al registrar', () => {
    expect(validateRegistration({ email: 'mal', password: '123', confirmation: '456' })).toEqual({
      email: 'Ingresá un email válido.',
      password: 'Usá al menos 8 caracteres.',
      confirmation: 'Las contraseñas no coinciden.',
    })
  })
})
