const SESSION_KEY = 'task-organization-session'

export const getSession = () => {
  try {
    const session = JSON.parse(window.localStorage.getItem(SESSION_KEY))
    return session?.token && session?.user ? session : null
  } catch {
    return null
  }
}

export const saveSession = (session) => {
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session))
}

export const clearSession = () => {
  window.localStorage.removeItem(SESSION_KEY)
}

export const getAccessToken = () => getSession()?.token ?? null
