import { StudyActivity, Subject } from '../models/index.js'
import { createHttpError } from '../utils/httpError.js'

const attributes = ['id', 'title', 'target_date', 'status', 'subject_id']

const findOwnedActivity = async (id, userId) => {
  const activity = await StudyActivity.findOne({
    where: { id },
    include: [{ model: Subject, as: 'subject', where: { user_id: userId }, attributes: [] }],
  })
  if (!activity) throw createHttpError(404, 'La actividad de estudio no fue encontrada')
  return activity
}

export const getStudyActivities = async (req, res, next) => {
  try {
    const activities = await StudyActivity.findAll({
      attributes,
      include: [{ model: Subject, as: 'subject', where: { user_id: req.user.id }, attributes: [] }],
      order: [['target_date', 'ASC']],
    })
    return res.json(activities)
  } catch (error) { return next(error) }
}

export const createStudyActivity = async (req, res, next) => {
  try {
    const subject = await Subject.findOne({ where: { id: req.body.subject_id, user_id: req.user.id } })
    if (!subject) throw createHttpError(400, 'La materia indicada no es válida')
    const activity = await StudyActivity.create(req.body)
    return res.status(201).json(attributes.reduce((data, key) => ({ ...data, [key]: activity[key] }), {}))
  } catch (error) { return next(error) }
}

export const updateStudyActivityStatus = async (req, res, next) => {
  try {
    const activity = await findOwnedActivity(req.params.id, req.user.id)
    await activity.update({ status: req.body.status })
    return res.json({ id: activity.id, status: activity.status })
  } catch (error) { return next(error) }
}
