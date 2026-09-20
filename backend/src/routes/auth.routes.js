import { Router } from 'express'
import { login } from '../controllers/auth.controller.js'
import { validateRequest } from '../middlewares/validate.middleware.js'
import { loginValidator } from '../validators/auth.validator.js'

const router = Router()

router.post('/login', loginValidator, validateRequest, login)

export default router
