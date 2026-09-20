import { useCallback, useMemo, useState } from 'react'
import { AuthContext } from './auth-context.js'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ id: 1, email: 'estudiante@organiza.app' })

  const signIn = useCallback((email) => setUser({ id: 1, email }), [])
  const signUp = useCallback((email) => setUser({ id: 1, email }), [])
  const signOut = useCallback(() => setUser(null), [])

  const value = useMemo(() => ({ user, signIn, signUp, signOut }), [user, signIn, signUp, signOut])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
