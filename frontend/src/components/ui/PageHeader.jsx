import { useDocumentTitle } from '../../hooks/useDocumentTitle.js'

const PageHeader = ({ eyebrow, title, description, children }) => {
  useDocumentTitle(title)

  return (
    <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
      <div>
        {eyebrow && <p className="section-eyebrow mb-1">{eyebrow}</p>}
        <h1 className="h2 mb-1">{title}</h1>
        {description && <p className="text-secondary mb-0">{description}</p>}
      </div>
      {children && <div>{children}</div>}
    </div>
  )
}

export { PageHeader }
