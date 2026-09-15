import './components.css'
import { useNavigate } from 'react-router-dom'
import useSavedProperties from '../hooks/useSavedProperties.js'

function PropertyCard({ id, image, title, type, location, price, tag, beds = 0, baths = 0, area = '—' }) {
  const navigate = useNavigate()
  const { savedIds, toggleSaved } = useSavedProperties()
  const saved = savedIds.includes(id)
  const openDetails = () => id && navigate(`/properties/${id}`)
  return <article className="property-card" onClick={openDetails} onKeyDown={(event) => event.key === 'Enter' && openDetails()} role="link" tabIndex="0"><div className="property-image" style={{ backgroundImage: `url(${image})` }}><span className="property-tag">{tag || type}</span><button className="heart-button" type="button" aria-pressed={saved} aria-label={`${saved ? 'Remove' : 'Save'} ${title}`} onClick={(event) => { event.stopPropagation(); toggleSaved(id) }}>{saved ? '♥' : '♡'}</button></div><div className="property-info"><div><h3>{title}</h3><p>{type} · {location}</p></div><strong>{price}</strong></div><div className="property-meta"><span>{beds ? `${beds} beds` : 'Land'}</span><span>{baths ? `${baths} baths` : 'Open plot'}</span><span>{area}</span></div></article>
}

export default PropertyCard
