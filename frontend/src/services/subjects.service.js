import { apiRequest } from './api.js'

export const getSubjects = () => apiRequest('/subjects')
export const getSubject = (id) => apiRequest(`/subjects/${id}`)
export const createSubject = (subject) => apiRequest('/subjects', { method: 'POST', body: JSON.stringify(subject) })
export const updateSubject = (id, subject) => apiRequest(`/subjects/${id}`, { method: 'PUT', body: JSON.stringify(subject) })
export const deleteSubject = (id) => apiRequest(`/subjects/${id}`, { method: 'DELETE' })
