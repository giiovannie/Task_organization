import { Router } from 'express'
import authRoutes from './auth.routes.js'
import profileRoutes from './profile.routes.js'
import subjectRoutes from './subject.routes.js'
import teacherRoutes from './teacher.routes.js'
import userRoutes from './user.routes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/profiles', profileRoutes)
router.use('/subjects', subjectRoutes)
router.use('/teachers', teacherRoutes)
router.use('/users', userRoutes)

export default router
