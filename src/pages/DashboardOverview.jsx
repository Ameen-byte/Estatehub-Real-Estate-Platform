import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import { properties as records } from '../data/properties.js'
import './dashboard.css'

const stats = [{ label: 'Total properties', value: '24', change: '+12.5% this month', icon: 'H' }, { label: 'Active inquiries', value: '18', change: '+18.2% this month', icon: '?' }, { label: 'Saved homes', value: '186', change: '+8.4% this month', icon: 'O' }]

function DashboardOverview() {
  return <section className="overview-panel"><div className="stats-grid">{stats.map((stat) => <StatCard {...stat} key={stat.label} />)}</div><div className="section-heading"><div><h2>Registered property records</h2><p className="subtle">Cards and table rendered dynamically with map() and stable keys.</p></div></div><div className="record-cards">{records.length ? records.map((record) => <Link className="record-link" to={`/properties/${record.id}`} key={record.id}><PropertyCard {...record} /></Link>) : <EmptyState />}</div>{records.length > 0 && <div className="record-table-wrap"><table><caption>Property register</caption><thead><tr><th>Property</th><th>Location</th><th>Price</th><th>Status</th><th>Views</th></tr></thead><tbody>{records.map((record) => <tr key={record.id}><td><Link to={`/properties/${record.id}`}>{record.title}</Link></td><td>{record.location}</td><td>{record.price}</td><td><span className={record.status === 'Active' ? 'status active-status' : 'status'}>{record.status}</span></td><td>{record.views}</td></tr>)}</tbody></table></div>}</section>
}

function EmptyState() { return <div className="empty-state"><strong>No property records yet</strong><p>New listings will appear here once they are added.</p><Link to="/register">Create your first record</Link></div> }
export default DashboardOverview
