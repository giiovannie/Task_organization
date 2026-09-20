import { Router } from 'express'
import { createUser, getUser } from '../controllers/user.controller.js'
import { validateRequest } from '../middlewares/validate.middleware.js'
import { createUserValidator, userIdValidator } from '../validators/user.validator.js'

const router = Router()

router.post('/', createUserValidator, validateRequest, createUser)
router.get('/:id', userIdValidator, validateRequest, getUser)

export default router
