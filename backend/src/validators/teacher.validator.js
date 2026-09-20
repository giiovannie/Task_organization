import { body } from 'express-validator'

export const createTeacherValidator = [
  body('name').trim().notEmpty().withMessage('El nombre es obligatorio').isLength({ max: 160 }),
]
