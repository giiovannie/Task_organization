import { apiRequest } from './api.js'

export const getNotifications = () => apiRequest('/notifications')
