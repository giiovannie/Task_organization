import { Router } from 'express'
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
  updateTaskStatus,
} from '../controllers/task.controller.js'
import { authenticate } from '../middlewares/auth.middleware.js'
import { validateRequest } from '../middlewares/validate.middleware.js'
import {
  createTaskValidator,
  taskIdValidator,
  taskStatusValidator,
  updateTaskValidator,
} from '../validators/task.validator.js'

const router = Router()

router.use(authenticate)
router.get('/', getTasks)
router.get('/:id', taskIdValidator, validateRequest, getTask)
router.post('/', createTaskValidator, validateRequest, createTask)
router.put('/:id', taskIdValidator, updateTaskValidator, validateRequest, updateTask)
router.patch('/:id/status', taskIdValidator, taskStatusValidator, validateRequest, updateTaskStatus)
router.delete('/:id', taskIdValidator, validateRequest, deleteTask)

export default router
