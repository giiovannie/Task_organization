import jwt from 'jsonwebtoken'

const getSecret = () => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET no está configurado')
  }

  return process.env.JWT_SECRET
}

export const generateToken = (userId) => jwt.sign(
  { sub: userId },
  getSecret(),
  { expiresIn: process.env.JWT_EXPIRES_IN || '1d' },
)

export const verifyToken = (token) => jwt.verify(token, getSecret())
