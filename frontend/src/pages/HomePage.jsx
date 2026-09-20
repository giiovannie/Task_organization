import StatusBadge from '../components/ui/StatusBadge.jsx'

const HomePage = () => (
  <section className="row justify-content-center w-100 g-4">
    <div className="col-12 col-lg-9 col-xl-8">
      <div className="card border-0 shadow-sm hero-card">
        <div className="card-body p-4 p-md-5">
          <StatusBadge />
          <p className="text-uppercase fw-semibold text-primary small mt-4 mb-2">Organización académica</p>
          <h1 className="display-5 fw-bold mb-3">Todo lo importante, en un solo lugar.</h1>
          <p className="lead text-secondary mb-4">
            La base visual del proyecto está configurada y preparada para crecer con tus materias, tareas y exámenes.
          </p>
          <div className="d-flex flex-wrap gap-2" aria-label="Tecnologías configuradas">
            {['React', 'Vite', 'Bootstrap', 'SCSS'].map((technology) => (
              <span className="technology-pill" key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HomePage
