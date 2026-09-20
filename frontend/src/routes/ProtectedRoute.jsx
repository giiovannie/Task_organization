import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'

const ProtectedRoute = () => {
  const { user } = useAuth()
  const location = useLocation()

  return user ? <Outlet /> : <Navigate replace state={{ from: location }} to="/login" />
}

export { ProtectedRoute }
