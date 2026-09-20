import { Subject, Teacher } from '../models/index.js'
import { createHttpError } from '../utils/httpError.js'

const subjectInclude = [{ model: Teacher, as: 'teacher', attributes: ['id', 'name'] }]

const ensureTeacher = async (teacherId, userId) => {
  const teacher = await Teacher.findOne({ where: { id: teacherId, user_id: userId } })
  if (!teacher) throw createHttpError(400, 'El profesor indicado no es válido')
}

export const getSubjects = async (req, res, next) => {
  try {
    const subjects = await Subject.findAll({
      where: { user_id: req.user.id },
      attributes: ['id', 'name'],
      include: subjectInclude,
      order: [['name', 'ASC']],
    })
    return res.json(subjects)
  } catch (error) {
    return next(error)
  }
}

export const getSubject = async (req, res, next) => {
  try {
    const subject = await Subject.findOne({
      where: { id: req.params.id, user_id: req.user.id },
      attributes: ['id', 'name'],
      include: subjectInclude,
    })
    if (!subject) throw createHttpError(404, 'La materia no fue encontrada')
    return res.json(subject)
  } catch (error) {
    return next(error)
  }
}

export const createSubject = async (req, res, next) => {
  try {
    await ensureTeacher(req.body.teacher_id, req.user.id)
    const subject = await Subject.create({ ...req.body, user_id: req.user.id })
    return res.status(201).json({ id: subject.id, name: subject.name, teacher_id: subject.teacher_id })
  } catch (error) {
    return next(error)
  }
}

export const updateSubject = async (req, res, next) => {
  try {
    const subject = await Subject.findOne({ where: { id: req.params.id, user_id: req.user.id } })
    if (!subject) throw createHttpError(404, 'La materia no fue encontrada')
    await ensureTeacher(req.body.teacher_id, req.user.id)
    await subject.update(req.body)
    return res.json({ id: subject.id, name: subject.name, teacher_id: subject.teacher_id })
  } catch (error) {
    return next(error)
  }
}

export const deleteSubject = async (req, res, next) => {
  try {
    const deleted = await Subject.destroy({ where: { id: req.params.id, user_id: req.user.id } })
    if (!deleted) throw createHttpError(404, 'La materia no fue encontrada')
    return res.json({ message: 'La materia fue eliminada correctamente' })
  } catch (error) {
    return next(error)
  }
}
