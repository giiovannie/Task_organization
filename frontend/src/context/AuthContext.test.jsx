import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useAuth } from '../hooks/useAuth.js'
import { clearSession } from '../utils/authSession.js'
import { AuthProvider } from './AuthContext.jsx'

const AuthConsumer = () => {
  const { signIn, signOut, signUp, user } = useAuth()

  return (
    <>
      <span>{user?.email ?? 'Sin sesión'}</span>
      <button onClick={() => signIn({ email: 'user@example.com', password: 'Password1' })} type="button">Ingresar</button>
      <button onClick={() => signUp({ email: 'new@example.com', password: 'Password1' })} type="button">Registrar</button>
      <button onClick={signOut} type="button">Salir</button>
    </>
  )
}

const response = (data, status = 200) => ({
  ok: status >= 200 && status < 300,
  status,
  json: vi.fn().mockResolvedValue(data),
})

describe('AuthProvider', () => {
  afterEach(() => {
    clearSession()
    vi.unstubAllGlobals()
  })

  it('inicia y cierra una sesión real', async () => {
    const user = userEvent.setup()
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response({
      user: { id: 1, email: 'user@example.com' },
      token: 'jwt-token',
    })))
    render(<AuthProvider><AuthConsumer /></AuthProvider>)

    await user.click(screen.getByRole('button', { name: 'Ingresar' }))
    expect(await screen.findByText('user@example.com')).toBeInTheDocument()
    expect(window.localStorage.getItem('task-organization-session')).toContain('jwt-token')

    await user.click(screen.getByRole('button', { name: 'Salir' }))
    expect(screen.getByText('Sin sesión')).toBeInTheDocument()
    expect(window.localStorage.getItem('task-organization-session')).toBeNull()
  })

  it('registra al usuario y luego obtiene su token', async () => {
    const user = userEvent.setup()
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(response({ id: 2, email: 'new@example.com' }, 201))
      .mockResolvedValueOnce(response({
        user: { id: 2, email: 'new@example.com' },
        token: 'new-token',
      }))
    vi.stubGlobal('fetch', fetchMock)
    render(<AuthProvider><AuthConsumer /></AuthProvider>)

    await user.click(screen.getByRole('button', { name: 'Registrar' }))
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2))

    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual([
      expect.stringContaining('/users'),
      expect.stringContaining('/auth/login'),
    ])
    expect(await screen.findByText('new@example.com')).toBeInTheDocument()
  })
})
