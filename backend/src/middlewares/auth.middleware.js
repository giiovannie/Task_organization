import { verifyToken } from '../helpers/token.js'

export const authenticate = (req, res, next) => {
  const authorization = req.get('authorization')
  const token = authorization?.startsWith('Bearer ') ? authorization.slice(7) : null

  if (!token) {
    return res.status(401).json({ message: 'Debes iniciar sesión' })
  }

  try {
    const payload = verifyToken(token)
    req.user = { id: Number(payload.sub) }
    return next()
  } catch {
    return res.status(401).json({ message: 'El token no es válido o expiró' })
  }
}
