import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ConfirmButton } from './ConfirmButton.jsx'

describe('ConfirmButton', () => {
  it('ejecuta la acción solamente cuando el usuario confirma', async () => {
    const user = userEvent.setup()
    const onConfirm = vi.fn()
    vi.spyOn(window, 'confirm').mockReturnValueOnce(false).mockReturnValueOnce(true)
    render(<ConfirmButton message="¿Eliminar?" onConfirm={onConfirm}>Eliminar</ConfirmButton>)

    await user.click(screen.getByRole('button', { name: 'Eliminar' }))
    expect(onConfirm).not.toHaveBeenCalled()
    await user.click(screen.getByRole('button', { name: 'Eliminar' }))
    expect(onConfirm).toHaveBeenCalledOnce()
  })
})
