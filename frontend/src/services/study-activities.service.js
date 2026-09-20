import { apiRequest } from './api.js'

export const getStudyActivities = () => apiRequest('/study-activities')
export const createStudyActivity = (activity) => apiRequest('/study-activities', { method: 'POST', body: JSON.stringify(activity) })
export const updateStudyActivityStatus = (id, status) => apiRequest(`/study-activities/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) })
