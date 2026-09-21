import { Link } from 'react-router-dom'

const Brand = () => (
  <Link className="navbar-brand fw-semibold" to="/" aria-label="Fokus, inicio">
    <span className="brand-mark me-2" aria-hidden="true">O</span>
    Fokus
  </Link>
)

export { Brand }
