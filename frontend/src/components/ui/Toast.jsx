import { useAppData } from '../../hooks/useAppData.js'

const Toast = () => {
  const { toast } = useAppData()
  if (!toast) return null

  return <div className={`app-toast alert alert-${toast.variant} shadow`} role="status">{toast.message}</div>
}

export default Toast
