import { describe, expect, it, vi } from 'vitest'
import { registerServiceWorker } from './registerServiceWorker.js'

describe('registerServiceWorker', () => {
  it('registra el service worker al cargar la aplicación en producción', async () => {
    const register = vi.fn().mockResolvedValue({})
    const addEventListener = vi.fn((event, callback) => {
      expect(event).toBe('load')
      callback()
    })

    registerServiceWorker({
      isProduction: true,
      serviceWorker: { register },
      windowObject: { addEventListener },
    })

    await vi.waitFor(() => expect(register).toHaveBeenCalledWith('/sw.js'))
  })

  it('no registra el service worker fuera de producción', () => {
    const register = vi.fn()

    registerServiceWorker({
      isProduction: false,
      serviceWorker: { register },
      windowObject: { addEventListener: vi.fn() },
    })

    expect(register).not.toHaveBeenCalled()
  })
})
