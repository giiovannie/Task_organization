import { apiRequest } from './api.js'

export const getTasks = () => apiRequest('/tasks')
export const getTask = (id) => apiRequest(`/tasks/${id}`)
export const getSubjectTasks = (subjectId) => apiRequest(`/subjects/${subjectId}/tasks`)
export const createTask = (task) => apiRequest('/tasks', { method: 'POST', body: JSON.stringify(task) })
export const updateTask = (id, task) => apiRequest(`/tasks/${id}`, { method: 'PUT', body: JSON.stringify(task) })
export const updateTaskStatus = (id, status) => apiRequest(`/tasks/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) })
export const deleteTask = (id) => apiRequest(`/tasks/${id}`, { method: 'DELETE' })
