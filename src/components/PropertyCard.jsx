import './components.css'

function PropertyCard({ image, title, location, price, tag }) {
  return <article className="property-card"><div className="property-image" style={{ backgroundImage: `url(${image})` }}><span className="property-tag">{tag}</span><button className="heart-button" type="button" aria-label={`Save ${title}`}>♡</button></div><div className="property-info"><div><h3>{title}</h3><p>{location}</p></div><strong>{price}</strong></div><div className="property-meta"><span>H 3 beds</span><span>2 baths</span><span>1,840 ft2</span></div></article>
}

export default PropertyCard
