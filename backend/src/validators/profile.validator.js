import { body, param } from 'express-validator'

export const profileUserIdValidator = [
  param('userId').isInt({ min: 1 }).withMessage('El usuario no es válido'),
]

export const profileIdValidator = [
  param('id').isInt({ min: 1 }).withMessage('El perfil no es válido'),
]

export const createProfileValidator = [
  body('user_id').isInt({ min: 1 }).withMessage('El usuario es obligatorio'),
  body('name').trim().notEmpty().withMessage('El nombre es obligatorio').isLength({ max: 80 }),
  body('last_name').trim().notEmpty().withMessage('El apellido es obligatorio').isLength({ max: 80 }),
  body('nickname').optional({ nullable: true }).trim().isLength({ max: 80 }),
  body('avatar_url').optional({ nullable: true }).isURL().withMessage('La URL del avatar no es válida'),
]

export const updateProfileValidator = [
  body('name').optional().trim().notEmpty().isLength({ max: 80 }),
  body('last_name').optional().trim().notEmpty().isLength({ max: 80 }),
  body('nickname').optional({ nullable: true }).trim().isLength({ max: 80 }),
  body('avatar_url').optional({ nullable: true }).isURL().withMessage('La URL del avatar no es válida'),
]
