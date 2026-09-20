import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar.jsx'
import Topbar from '../components/common/Topbar.jsx'
import Toast from '../components/ui/Toast.jsx'

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app-shell min-vh-100">
      <div className={`sidebar-panel ${menuOpen ? 'is-open' : ''}`}>
        <Sidebar onNavigate={() => setMenuOpen(false)} />
      </div>
      {menuOpen && <button className="sidebar-backdrop" onClick={() => setMenuOpen(false)} type="button" aria-label="Cerrar navegación" />}
      <div className="app-content">
        <Topbar onMenu={() => setMenuOpen(true)} />
        <main className="p-3 p-md-4 p-xl-5"><Outlet /></main>
      </div>
      <Toast />
    </div>
  )
}

export default MainLayout
