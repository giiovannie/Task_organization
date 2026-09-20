import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import EmptyState from './EmptyState.jsx'

describe('EmptyState', () => {
  it('presenta un título y una explicación', () => {
    render(<EmptyState title="Sin tareas" message="Creá tu primera tarea." />)
    expect(screen.getByRole('heading', { name: 'Sin tareas' })).toBeInTheDocument()
    expect(screen.getByText('Creá tu primera tarea.')).toBeInTheDocument()
  })
})
