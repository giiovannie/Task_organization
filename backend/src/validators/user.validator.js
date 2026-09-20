import { body, param } from 'express-validator'

export const createUserValidator = [
  body('email').isEmail().withMessage('El email no es válido').normalizeEmail(),
  body('password')
    .isLength({ min: 8, max: 72 })
    .withMessage('La contraseña debe tener entre 8 y 72 caracteres'),
]

export const userIdValidator = [
  param('id').isInt({ min: 1 }).withMessage('El usuario no es válido'),
]
