import { Link } from 'react-router-dom'
import { useAppData } from '../../hooks/useAppData.js'

const Topbar = ({ onMenu }) => {
  const { data } = useAppData()
  const unread = data.notifications.filter(({ read }) => !read).length

  return (
    <header className="app-topbar d-flex align-items-center justify-content-between px-3 px-lg-4 py-3">
      <button className="btn btn-light d-lg-none" onClick={onMenu} type="button" aria-label="Abrir navegación">☰</button>
      <div className="d-none d-sm-block">
        <p className="small text-secondary mb-0">Tu espacio académico</p>
        <strong>Hola, {data.profile.nickname}</strong>
      </div>
      <div className="d-flex align-items-center gap-2">
        <Link className="btn btn-light position-relative" to="/notifications" aria-label="Notificaciones">
          🔔
          {unread > 0 && <span className="notification-count">{unread}</span>}
        </Link>
        <Link className="avatar-link" to="/profile" aria-label="Ver perfil">
          {data.profile.name.charAt(0)}{data.profile.last_name.charAt(0)}
        </Link>
      </div>
    </header>
  )
}

export { Topbar }
