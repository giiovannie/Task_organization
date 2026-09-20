import { body, param } from 'express-validator'

export const examIdValidator = [param('id').isInt({ min: 1 }).withMessage('El examen no es válido')]
export const examSubjectIdValidator = [param('subjectId').isInt({ min: 1 }).withMessage('La materia no es válida')]

export const createExamValidator = [
  body('title').trim().notEmpty().withMessage('El título es obligatorio').isLength({ max: 180 }),
  body('exam_date').isISO8601({ strict: true }).withMessage('La fecha debe usar YYYY-MM-DD'),
  body('topics').optional({ nullable: true }).isString(),
  body('subject_id').isInt({ min: 1 }).withMessage('La materia es obligatoria'),
]

export const updateExamValidator = [
  body('title').optional().trim().notEmpty().isLength({ max: 180 }),
  body('exam_date').optional().isISO8601({ strict: true }).withMessage('La fecha debe usar YYYY-MM-DD'),
  body('topics').optional({ nullable: true }).isString(),
  body('subject_id').optional().isInt({ min: 1 }),
]

export const examGradeValidator = [
  body('grade').isFloat({ min: 0, max: 10 }).withMessage('La calificación debe estar entre 0 y 10'),
]
