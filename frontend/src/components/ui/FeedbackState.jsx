export const LoadingState = ({ message = 'Cargando información…' }) => (
  <div className="d-flex align-items-center gap-3 py-4" role="status">
    <span className="spinner-border spinner-border-sm text-primary" />{message}
  </div>
)

export const ErrorState = ({ message = 'No pudimos cargar la información.', onRetry }) => (
  <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
    <span>{message}</span>
    {onRetry && <button className="btn btn-sm btn-outline-danger" onClick={onRetry} type="button">Reintentar</button>}
  </div>
)
