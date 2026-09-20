import { Op } from 'sequelize'
import { Exam, StudyActivity, Subject, Task } from '../models/index.js'
import { addDays, calculateDaysRemaining, todayDate } from '../utils/date.js'

const remainingText = (days) => days === 0 ? 'hoy' : `en ${days} ${days === 1 ? 'día' : 'días'}`

export const getNotifications = async (req, res, next) => {
  try {
    const today = todayDate()
    const limit = addDays(today, 7)
    const includeSubject = () => [{
      model: Subject,
      as: 'subject',
      where: { user_id: req.user.id },
      attributes: ['name'],
    }]

    const [tasks, exams, activities] = await Promise.all([
      Task.findAll({
        where: { due_date: { [Op.between]: [today, limit] }, status: { [Op.ne]: 'completed' } },
        attributes: ['title', 'due_date'],
        include: includeSubject(),
      }),
      Exam.findAll({
        where: { exam_date: { [Op.between]: [today, limit] } },
        attributes: ['title', 'exam_date'],
        include: includeSubject(),
      }),
      StudyActivity.findAll({
        where: { target_date: { [Op.between]: [today, limit] }, status: 'pending' },
        attributes: ['title', 'target_date'],
        include: includeSubject(),
      }),
    ])

    const notifications = [
      ...tasks.map((task) => ({
        type: 'task',
        message: `La tarea ${task.title} de ${task.subject.name} vence ${remainingText(calculateDaysRemaining(task.due_date, today))}`,
        date: task.due_date,
      })),
      ...exams.map((exam) => ({
        type: 'exam',
        message: `El examen ${exam.title} de ${exam.subject.name} es ${remainingText(calculateDaysRemaining(exam.exam_date, today))}`,
        date: exam.exam_date,
      })),
      ...activities.map((activity) => ({
        type: 'study_activity',
        message: `La actividad ${activity.title} vence ${remainingText(calculateDaysRemaining(activity.target_date, today))}`,
        date: activity.target_date,
      })),
    ].sort((a, b) => a.date.localeCompare(b.date))

    return res.json(notifications.map(({ type, message }, index) => ({
      id: index + 1,
      type,
      message,
      read: false,
    })))
  } catch (error) {
    return next(error)
  }
}
