import { afterEach, describe, expect, it, vi } from 'vitest'
import { createSubject, deleteSubject, updateSubject } from './subjects.service.js'
import { updateTaskStatus } from './tasks.service.js'
import { updateExamGrade } from './exams.service.js'

const response = { ok: true, status: 200, json: vi.fn().mockResolvedValue({ id: 1 }) }

describe('services de recursos', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('respeta rutas y métodos de materias', async () => {
    const fetchMock = vi.fn().mockResolvedValue(response)
    vi.stubGlobal('fetch', fetchMock)
    await createSubject({ name: 'Programación', teacher_id: 1 })
    await updateSubject(1, { name: 'Programación II', teacher_id: 2 })
    await deleteSubject(1)
    expect(fetchMock.mock.calls.map(([url, options]) => [url, options.method])).toEqual([
      [expect.stringContaining('/subjects'), 'POST'],
      [expect.stringContaining('/subjects/1'), 'PUT'],
      [expect.stringContaining('/subjects/1'), 'DELETE'],
    ])
  })

  it('usa PATCH para estados y calificaciones', async () => {
    const fetchMock = vi.fn().mockResolvedValue(response)
    vi.stubGlobal('fetch', fetchMock)
    await updateTaskStatus(2, 'completed')
    await updateExamGrade(3, 8)
    expect(fetchMock.mock.calls[0][1]).toEqual(expect.objectContaining({ method: 'PATCH', body: JSON.stringify({ status: 'completed' }) }))
    expect(fetchMock.mock.calls[1][1]).toEqual(expect.objectContaining({ method: 'PATCH', body: JSON.stringify({ grade: 8 }) }))
  })
})
