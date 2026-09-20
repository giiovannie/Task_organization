import { Op } from 'sequelize'
import { Exam, StudyActivity, Subject, Task } from '../models/index.js'
import { calculateDaysRemaining, todayDate } from '../utils/date.js'

const subjectJoin = {
  model: Subject,
  as: 'subject',
  where: {},
  attributes: ['name'],
}

export const getUpcoming = async (req, res, next) => {
  try {
    const today = todayDate()
    const includeSubject = () => [{ ...subjectJoin, where: { user_id: req.user.id } }]

    const [tasks, exams, activities] = await Promise.all([
      Task.findAll({
        where: { due_date: { [Op.gte]: today }, status: { [Op.ne]: 'completed' } },
        attributes: ['id', 'title', 'due_date'],
        include: includeSubject(),
        order: [['due_date', 'ASC']],
      }),
      Exam.findAll({
        where: { exam_date: { [Op.gte]: today } },
        attributes: ['id', 'title', 'exam_date'],
        include: includeSubject(),
        order: [['exam_date', 'ASC']],
      }),
      StudyActivity.findAll({
        where: { target_date: { [Op.gte]: today }, status: 'pending' },
        attributes: ['id', 'title', 'target_date'],
        include: includeSubject(),
        order: [['target_date', 'ASC']],
      }),
    ])

    return res.json({
      tasks: tasks.map((task) => ({
        id: task.id,
        title: task.title,
        due_date: task.due_date,
        subject: task.subject.name,
      })),
      exams: exams.map((exam) => ({
        id: exam.id,
        title: exam.title,
        exam_date: exam.exam_date,
        subject: exam.subject.name,
        days_remaining: calculateDaysRemaining(exam.exam_date, today),
      })),
      study_activities: activities.map((activity) => ({
        id: activity.id,
        title: activity.title,
        target_date: activity.target_date,
      })),
    })
  } catch (error) {
    return next(error)
  }
}
