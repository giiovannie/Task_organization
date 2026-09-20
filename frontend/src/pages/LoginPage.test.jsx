import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { AuthProvider } from '../context/AuthContext.jsx'
import { LoginPage } from './LoginPage.jsx'

describe('LoginPage', () => {
  it('muestra validaciones accesibles al enviar campos vacíos', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter><AuthProvider><LoginPage /></AuthProvider></MemoryRouter>)
    await user.click(screen.getByRole('button', { name: 'Ingresar' }))
    expect(screen.getByText('Ingresá tu email.')).toBeInTheDocument()
    expect(screen.getByText('Ingresá tu contraseña.')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true')
  })
})
