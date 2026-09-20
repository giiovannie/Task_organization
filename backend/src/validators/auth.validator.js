import { body } from 'express-validator'

export const loginValidator = [
  body('email').isEmail().withMessage('El email no es válido').normalizeEmail(),
  body('password').isString().notEmpty().withMessage('La contraseña es obligatoria'),
]
