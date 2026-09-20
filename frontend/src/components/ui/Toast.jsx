import { useAppData } from '../../hooks/useAppData.js'

const Toast = () => {
  const { toast } = useAppData()
  if (!toast) return null

  return <div aria-atomic="true" aria-live="polite" className={`app-toast alert alert-${toast.variant} shadow`} role="status">{toast.message}</div>
}

export default Toast
