import { Router } from 'express'
import { getUpcoming } from '../controllers/dashboard.controller.js'
import { authenticate } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('/upcoming', authenticate, getUpcoming)

export default router
