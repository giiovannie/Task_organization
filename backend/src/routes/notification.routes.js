import { Router } from 'express'
import { getNotifications } from '../controllers/notification.controller.js'
import { authenticate } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('/', authenticate, getNotifications)

export { router as notificationRouter }
