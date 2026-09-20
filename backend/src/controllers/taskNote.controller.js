import { Subject, Task, TaskNote } from '../models/index.js'
import { createHttpError } from '../utils/httpError.js'
import { findOwnedTask } from './task.controller.js'

const findOwnedNote = async (noteId, userId) => {
  const note = await TaskNote.findOne({
    where: { id: noteId },
    include: [{
      model: Task,
      as: 'task',
      attributes: [],
      include: [{ model: Subject, as: 'subject', where: { user_id: userId }, attributes: [] }],
    }],
  })
  if (!note) throw createHttpError(404, 'La nota no fue encontrada')
  return note
}

export const getTaskNotes = async (req, res, next) => {
  try {
    const task = await findOwnedTask(req.params.taskId, req.user.id)
    const notes = await TaskNote.findAll({
      where: { task_id: task.id },
      attributes: ['id', 'content', 'task_id'],
      order: [['created_at', 'ASC']],
    })
    return res.json(notes)
  } catch (error) {
    return next(error)
  }
}

export const createTaskNote = async (req, res, next) => {
  try {
    const task = await findOwnedTask(req.params.taskId, req.user.id)
    const note = await TaskNote.create({ content: req.body.content, task_id: task.id })
    return res.status(201).json({ id: note.id, content: note.content, task_id: note.task_id })
  } catch (error) {
    return next(error)
  }
}

export const updateTaskNote = async (req, res, next) => {
  try {
    const note = await findOwnedNote(req.params.id, req.user.id)
    await note.update({ content: req.body.content })
    return res.json({ id: note.id, content: note.content, task_id: note.task_id })
  } catch (error) {
    return next(error)
  }
}

export const deleteTaskNote = async (req, res, next) => {
  try {
    const note = await findOwnedNote(req.params.id, req.user.id)
    await note.destroy()
    return res.json({ message: 'La nota fue eliminada correctamente' })
  } catch (error) {
    return next(error)
  }
}
