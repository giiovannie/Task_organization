import { afterEach, describe, expect, it } from 'vitest'
import { applyNotificationReadState, persistNotificationReadState } from './notificationReadState.js'

const notifications = [
  { id: 1, type: 'task', message: 'La tarea vence mañana', read: false },
  { id: 2, type: 'exam', message: 'El examen es en dos días', read: false },
]

describe('notificationReadState', () => {
  afterEach(() => window.localStorage.clear())

  it('restaura el estado leído por usuario y por contenido', () => {
    persistNotificationReadState([{ ...notifications[0], read: true }], 7)

    expect(applyNotificationReadState(notifications, 7)).toEqual([
      { ...notifications[0], read: true },
      notifications[1],
    ])
    expect(applyNotificationReadState(notifications, 8)).toEqual(notifications)
  })

  it('no confunde una notificación nueva aunque reutilice el mismo id', () => {
    persistNotificationReadState([{ ...notifications[0], read: true }], 7)
    const changed = [{ ...notifications[0], message: 'La tarea vence hoy' }]

    expect(applyNotificationReadState(changed, 7)[0].read).toBe(false)
  })

  it('tolera datos locales inválidos', () => {
    window.localStorage.setItem('organiza:read-notifications:7', '{')

    expect(applyNotificationReadState(notifications, 7)).toEqual(notifications)
  })
})
