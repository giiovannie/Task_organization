import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <main className="min-vh-100 d-grid place-center text-center p-4">
    <div><p className="display-1 fw-bold text-primary mb-0">404</p><h1 className="h3">Página no encontrada</h1><p className="text-secondary">La dirección que buscás no existe.</p><Link className="btn btn-primary" to="/">Volver al inicio</Link></div>
  </main>
)

export default NotFoundPage
