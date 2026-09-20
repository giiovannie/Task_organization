import { body, param } from 'express-validator'

export const subjectIdValidator = [
  param('id').isInt({ min: 1 }).withMessage('La materia no es válida'),
]

export const subjectBodyValidator = [
  body('name').trim().notEmpty().withMessage('El nombre es obligatorio').isLength({ max: 160 }),
  body('teacher_id').isInt({ min: 1 }).withMessage('El profesor es obligatorio'),
]
