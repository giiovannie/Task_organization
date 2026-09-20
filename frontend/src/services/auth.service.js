import { apiRequest } from './api.js'

export const login = (credentials) => apiRequest('/auth/login', {
  method: 'POST',
  body: JSON.stringify(credentials),
})
