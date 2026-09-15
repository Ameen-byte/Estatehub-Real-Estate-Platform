import StatCard from '../components/StatCard.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import ActivityList from '../components/ActivityList.jsx'
import Button from '../components/Button.jsx'
import { useNavigate } from 'react-router-dom'
import useProperties from '../hooks/useProperties.js'

const stats = [{ label: 'Active listings', value: '24', change: '+12.5% this month', icon: '⌂' }, { label: 'Total views', value: '8,492', change: '+18.2% this month', icon: '◉' }, { label: 'Saved properties', value: '186', change: '+8.4% this month', icon: '♡' }, { label: 'Avg. response time', value: '2.4h', change: '-14.6% this month', icon: '◷', negative: true }]
const activities = [{ id: 1, icon: '♡', title: 'New save on The Willow House', detail: 'A potential buyer saved your listing.', time: '12 minutes ago' }, { id: 2, icon: '↗', title: 'Listing views are up 18%', detail: 'The Greenhouse is getting noticed.', time: '2 hours ago' }, { id: 3, icon: '✦', title: 'Open house reminder', detail: 'Your event starts this Saturday at 11:00 AM.', time: 'Yesterday' }, { id: 4, icon: '✓', title: 'Message from Olivia Chen', detail: '“Is the backyard furnished?”', time: 'Yesterday' }]

function Home() {
  const navigate = useNavigate()
  const { properties } = useProperties()
  return <main id="top" className="main-content"><div className="hero-row"><div><p className="eyebrow">Tuesday, September 10, 2026</p><h1>Good morning, Ameen.</h1><p className="subtle">Here is what is happening with your properties today.</p></div><div className="header-actions"><button className="icon-button" type="button" aria-label="Search properties" onClick={() => navigate('/dashboard/overview')}>⌕</button><Button onClick={() => navigate('/register')}>+ New listing</Button></div></div><section id="overview" className="stats-grid" aria-label="Portfolio overview">{stats.map((stat) => <StatCard {...stat} key={stat.label} />)}</section><div className="dashboard-grid"><section id="listings" className="panel"><div className="section-heading"><div><h2>Your properties</h2><p className="subtle">Recently updated listings</p></div><button className="view-link" type="button" onClick={() => navigate('/dashboard/overview')}>View all →</button></div><div className="listing-grid">{properties.slice(0, 4).map((property) => <PropertyCard {...property} key={property.id} />)}</div></section><section id="activity" className="panel activity-panel"><div className="section-heading"><div><h2>Recent activity</h2><p className="subtle">Keep up with your portfolio</p></div><button className="view-link" type="button" onClick={() => navigate('/dashboard/overview')} aria-label="View all activity">•••</button></div><ActivityList activities={activities} /></section></div></main>
}

export default Home