import { apiRequest } from './api.js'

export const getProfile = (userId) => apiRequest(`/profiles/${userId}`)
export const createProfile = (profile) => apiRequest('/profiles', { method: 'POST', body: JSON.stringify(profile) })
export const updateProfile = (id, profile) => apiRequest(`/profiles/${id}`, { method: 'PUT', body: JSON.stringify(profile) })
