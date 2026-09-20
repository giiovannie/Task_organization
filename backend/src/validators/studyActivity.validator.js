import { body, param } from 'express-validator'

export const activityIdValidator = [param('id').isInt({ min: 1 }).withMessage('La actividad no es válida')]
export const createActivityValidator = [
  body('title').trim().notEmpty().withMessage('El título es obligatorio').isLength({ max: 180 }),
  body('target_date').isISO8601({ strict: true }).withMessage('La fecha debe usar YYYY-MM-DD'),
  body('subject_id').isInt({ min: 1 }).withMessage('La materia es obligatoria'),
]
export const activityStatusValidator = [
  body('status').isIn(['pending', 'completed']).withMessage('El estado no es válido'),
]
