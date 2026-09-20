import { afterEach, describe, expect, it } from 'vitest'
import { clearSession, getAccessToken, getSession, saveSession } from './authSession.js'

describe('authSession', () => {
  afterEach(() => clearSession())

  it('guarda y recupera una sesión válida', () => {
    const session = { user: { id: 1, email: 'user@example.com' }, token: 'jwt-token' }

    saveSession(session)

    expect(getSession()).toEqual(session)
    expect(getAccessToken()).toBe('jwt-token')
  })

  it('descarta contenido inválido', () => {
    window.localStorage.setItem('task-organization-session', '{invalid')

    expect(getSession()).toBeNull()
    expect(getAccessToken()).toBeNull()
  })
})
