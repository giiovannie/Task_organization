import { describe, expect, it } from 'vitest'
import { addDays, calculateDaysRemaining } from '../src/utils/date.js'

describe('utilidades de fecha', () => {
  it('calcula días restantes sin depender de la zona horaria', () => {
    expect(calculateDaysRemaining('2026-10-10', '2026-10-01')).toBe(9)
  })

  it('suma días conservando el formato del contrato', () => {
    expect(addDays('2026-09-30', 7)).toBe('2026-10-07')
  })
})
