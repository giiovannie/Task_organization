import { describe, expect, it } from 'vitest'
import { pick } from '../src/utils/pick.js'

describe('selección segura de campos', () => {
  it('descarta propiedades que no pertenecen a la operación', () => {
    expect(pick({ title: 'Tarea', status: 'completed', user_id: 99 }, ['title'])).toEqual({ title: 'Tarea' })
  })
})
