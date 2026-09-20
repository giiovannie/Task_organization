import { Router } from 'express'
import authRoutes from './auth.routes.js'
import examRoutes from './exam.routes.js'
import profileRoutes from './profile.routes.js'
import subjectRoutes from './subject.routes.js'
import studyActivityRoutes from './studyActivity.routes.js'
import teacherRoutes from './teacher.routes.js'
import taskRoutes from './task.routes.js'
import noteRoutes from './note.routes.js'
import userRoutes from './user.routes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/exams', examRoutes)
router.use('/profiles', profileRoutes)
router.use('/subjects', subjectRoutes)
router.use('/study-activities', studyActivityRoutes)
router.use('/teachers', teacherRoutes)
router.use('/tasks', taskRoutes)
router.use('/notes', noteRoutes)
router.use('/users', userRoutes)

export default router
