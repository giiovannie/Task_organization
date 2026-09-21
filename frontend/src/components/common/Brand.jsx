import { Link } from 'react-router-dom'

const Brand = () => (
  <Link className="navbar-brand fw-semibold" to="/" aria-label="Fokus, inicio">
    <img className="brand-logo me-2" src="/icons/fokus-logo.png" alt="" />
    Fokus
  </Link>
)

export { Brand }
