import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('../src/models/index.js', () => ({
  sequelize: {
    authenticate: vi.fn(),
    sync: vi.fn(),
  },
}))

const { sequelize } = await import('../src/models/index.js')
const { initializeDatabase } = await import('../src/config/initializeDatabase.js')

describe('initializeDatabase', () => {
  beforeEach(() => vi.clearAllMocks())

  it('valida la conexión antes de sincronizar los modelos sin opciones destructivas', async () => {
    await initializeDatabase()

    expect(sequelize.authenticate).toHaveBeenCalledOnce()
    expect(sequelize.sync).toHaveBeenCalledOnce()
    expect(sequelize.sync).toHaveBeenCalledWith()
    expect(sequelize.authenticate.mock.invocationCallOrder[0]).toBeLessThan(sequelize.sync.mock.invocationCallOrder[0])
  })

  it('no sincroniza si la conexión falla', async () => {
    sequelize.authenticate.mockRejectedValueOnce(new Error('connection failed'))

    await expect(initializeDatabase()).rejects.toThrow('connection failed')
    expect(sequelize.sync).not.toHaveBeenCalled()
  })
})
