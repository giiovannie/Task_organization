import { apiRequest } from './api.js'

export const getUpcoming = () => apiRequest('/dashboard/upcoming')
