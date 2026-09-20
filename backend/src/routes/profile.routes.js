import { Router } from 'express'
import { createProfile, getProfile, updateProfile } from '../controllers/profile.controller.js'
import { authenticate } from '../middlewares/auth.middleware.js'
import { validateRequest } from '../middlewares/validate.middleware.js'
import {
  createProfileValidator,
  profileIdValidator,
  profileUserIdValidator,
  updateProfileValidator,
} from '../validators/profile.validator.js'

const router = Router()

router.use(authenticate)
router.get('/:userId', profileUserIdValidator, validateRequest, getProfile)
router.post('/', createProfileValidator, validateRequest, createProfile)
router.put('/:id', profileIdValidator, updateProfileValidator, validateRequest, updateProfile)

export default router
