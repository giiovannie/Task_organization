export const notFoundHandler = (req, res) => {
  res.status(404).json({ message: 'La ruta solicitada no existe' })
}

export const errorHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error)
  }

  const status = error.status || 500
  const message = status === 500 ? 'Ocurrió un error interno' : error.message

  return res.status(status).json({ message })
}
