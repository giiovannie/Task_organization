import { Link } from 'react-router-dom'

const Brand = () => (
  <Link className="navbar-brand fw-semibold" to="/" aria-label="Organiza, inicio">
    <span className="brand-mark me-2" aria-hidden="true">O</span>
    Organiza
  </Link>
)

export default Brand
