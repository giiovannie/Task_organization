import { UniqueConstraintError } from 'sequelize'
import { hashPassword } from '../helpers/password.js'
import { User } from '../models/index.js'
import { createHttpError } from '../utils/httpError.js'

export const createUser = async (req, res, next) => {
  try {
    const password = await hashPassword(req.body.password)
    const user = await User.create({ email: req.body.email.toLowerCase(), password })

    return res.status(201).json({ id: user.id, email: user.email })
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      return next(createHttpError(409, 'El email ya está registrado'))
    }

    return next(error)
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, { attributes: ['id', 'email'] })

    if (!user) {
      throw createHttpError(404, 'El usuario no fue encontrado')
    }

    return res.json(user)
  } catch (error) {
    return next(error)
  }
}
