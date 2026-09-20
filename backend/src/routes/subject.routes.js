import { Router } from 'express'
import {
  createSubject,
  deleteSubject,
  getSubject,
  getSubjects,
  updateSubject,
} from '../controllers/subject.controller.js'
import { authenticate } from '../middlewares/auth.middleware.js'
import { validateRequest } from '../middlewares/validate.middleware.js'
import { subjectBodyValidator, subjectIdValidator } from '../validators/subject.validator.js'
import { getSubjectTasks } from '../controllers/task.controller.js'
import { taskSubjectIdValidator } from '../validators/task.validator.js'

const router = Router()

router.use(authenticate)
router.get('/', getSubjects)
router.get('/:subjectId/tasks', taskSubjectIdValidator, validateRequest, getSubjectTasks)
router.get('/:id', subjectIdValidator, validateRequest, getSubject)
router.post('/', subjectBodyValidator, validateRequest, createSubject)
router.put('/:id', subjectIdValidator, subjectBodyValidator, validateRequest, updateSubject)
router.delete('/:id', subjectIdValidator, validateRequest, deleteSubject)

export default router
