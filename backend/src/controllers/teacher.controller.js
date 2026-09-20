import { Teacher } from '../models/index.js'

export const getTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.findAll({
      where: { user_id: req.user.id },
      attributes: ['id', 'name'],
      order: [['name', 'ASC']],
    })
    return res.json(teachers)
  } catch (error) {
    return next(error)
  }
}

export const createTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.create({ name: req.body.name, user_id: req.user.id })
    return res.status(201).json({ id: teacher.id, name: teacher.name })
  } catch (error) {
    return next(error)
  }
}
