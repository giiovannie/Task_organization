import { apiRequest } from './api.js'

export const getTaskNotes = (taskId) => apiRequest(`/tasks/${taskId}/notes`)
export const createTaskNote = (taskId, note) => apiRequest(`/tasks/${taskId}/notes`, { method: 'POST', body: JSON.stringify(note) })
export const updateTaskNote = (id, note) => apiRequest(`/notes/${id}`, { method: 'PUT', body: JSON.stringify(note) })
export const deleteTaskNote = (id) => apiRequest(`/notes/${id}`, { method: 'DELETE' })
