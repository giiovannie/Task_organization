const StatCard = ({ label, value, detail, tone = 'primary' }) => (
  <div className="card metric-card border-0 h-100">
    <div className="card-body">
      <span className={`metric-dot bg-${tone}`} />
      <p className="text-secondary small mb-2">{label}</p>
      <strong className="display-6">{value}</strong>
      <p className="small text-secondary mt-2 mb-0">{detail}</p>
    </div>
  </div>
)

export default StatCard
