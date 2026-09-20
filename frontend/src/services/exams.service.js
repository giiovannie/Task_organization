import { apiRequest } from './api.js'

export const getExams = () => apiRequest('/exams')
export const getExam = (id) => apiRequest(`/exams/${id}`)
export const getSubjectExams = (subjectId) => apiRequest(`/subjects/${subjectId}/exams`)
export const createExam = (exam) => apiRequest('/exams', { method: 'POST', body: JSON.stringify(exam) })
export const updateExam = (id, exam) => apiRequest(`/exams/${id}`, { method: 'PUT', body: JSON.stringify(exam) })
export const updateExamGrade = (id, grade) => apiRequest(`/exams/${id}/grade`, { method: 'PATCH', body: JSON.stringify({ grade }) })
export const deleteExam = (id) => apiRequest(`/exams/${id}`, { method: 'DELETE' })
