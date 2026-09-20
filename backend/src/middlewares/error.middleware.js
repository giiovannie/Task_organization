export const notFoundHandler = (req, res) => {
  res.status(404).json({ message: 'La ruta solicitada no existe' })
}

export const errorHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error)
  }

  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    return res.status(400).json({ message: 'El cuerpo JSON no es válido' })
  }

  if (error instanceof ValidationError || error instanceof ForeignKeyConstraintError) {
    return res.status(400).json({ message: 'Los datos enviados no son válidos' })
  }

  const status = error.status || 500
  const message = status === 500 ? 'Ocurrió un error interno' : error.message

  return res.status(status).json({ message })
}
import { ForeignKeyConstraintError, ValidationError } from 'sequelize'
