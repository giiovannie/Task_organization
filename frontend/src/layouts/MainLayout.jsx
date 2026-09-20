import Brand from '../components/common/Brand.jsx'

const MainLayout = ({ children }) => (
  <div className="min-vh-100 d-flex flex-column">
    <header className="border-bottom bg-white">
      <nav className="navbar container py-3"><Brand /></nav>
    </header>
    <main className="container flex-grow-1 d-flex align-items-center py-5">{children}</main>
    <footer className="container py-4 text-secondary small">Organiza · Tu espacio académico</footer>
  </div>
)

export default MainLayout
