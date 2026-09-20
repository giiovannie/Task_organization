import { body, param } from 'express-validator'

export const noteIdValidator = [param('id').isInt({ min: 1 }).withMessage('La nota no es válida')]
export const taskNoteTaskIdValidator = [param('taskId').isInt({ min: 1 }).withMessage('La tarea no es válida')]
export const noteBodyValidator = [
  body('content').trim().notEmpty().withMessage('El contenido es obligatorio').isLength({ max: 5000 }),
]
