import request from 'supertest'
import { describe, expect, it } from 'vitest'
import app from '../src/app.js'

describe('API', () => {
  it('devuelve el formato de error para rutas inexistentes', async () => {
    const response = await request(app).get('/api/not-found')

    expect(response.status).toBe(404)
    expect(response.body).toEqual({ message: 'La ruta solicitada no existe' })
  })

  it('valida el registro antes de acceder a la base de datos', async () => {
    const response = await request(app).post('/api/users').send({ email: 'incorrecto', password: '123' })

    expect(response.status).toBe(400)
    expect(response.body.message).toBe('Los datos enviados no son válidos')
    expect(response.body.errors).toEqual(expect.arrayContaining([
      expect.objectContaining({ field: 'email' }),
      expect.objectContaining({ field: 'password' }),
    ]))
  })

  it('protege los recursos académicos', async () => {
    const response = await request(app).get('/api/tasks')

    expect(response.status).toBe(401)
    expect(response.body).toEqual({ message: 'Debes iniciar sesión' })
  })

  it('normaliza los errores de JSON inválido', async () => {
    const response = await request(app)
      .post('/api/users')
      .set('Content-Type', 'application/json')
      .send('{')

    expect(response.status).toBe(400)
    expect(response.body).toEqual({ message: 'El cuerpo JSON no es válido' })
  })
})
