import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard.jsx'
import useProperties from '../hooks/useProperties.js'
import useSavedProperties from '../hooks/useSavedProperties.js'
import './dashboard.css'

function SavedHomes() {
  const { properties } = useProperties()
  const { savedIds } = useSavedProperties()
  const savedProperties = properties.filter((property) => savedIds.includes(property.id))

  return <main className="dashboard-page"><div className="dashboard-top"><div><p className="eyebrow">Your collection</p><h1>Saved homes</h1><p className="subtle">Keep the properties you want to compare close at hand.</p></div><Link className="button button-primary" to="/dashboard/overview">Browse listings</Link></div>{savedProperties.length ? <div className="record-cards">{savedProperties.map((property) => <PropertyCard {...property} key={property.id} />)}</div> : <div className="empty-state"><strong>No saved homes yet</strong><p>Tap the heart on any house, land, villa, or place to save it here.</p><Link className="text-link" to="/dashboard/overview">Explore properties →</Link></div>}</main>
}

export default SavedHomes
