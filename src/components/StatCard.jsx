import './components.css'

function StatCard({ label, value, change, icon, negative = false }) {
  return <article className="stat-card"><div className="stat-label"><span>{label}</span><span className="stat-icon">{icon}</span></div><div className="stat-value">{value}</div><span className={negative ? 'stat-change negative' : 'stat-change'}>{change}</span></article>
}

export default StatCard
