import { apiRequest } from './api.js'

export const getTeachers = () => apiRequest('/teachers')
export const createTeacher = (teacher) => apiRequest('/teachers', { method: 'POST', body: JSON.stringify(teacher) })
