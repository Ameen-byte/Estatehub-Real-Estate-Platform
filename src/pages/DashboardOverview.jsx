import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import Button from '../components/Button.jsx'
import useProperties from '../hooks/useProperties.js'
import './dashboard.css'

const emptyForm = { title: '', type: 'House', location: '', price: '', tag: 'New listing', status: 'Active', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', description: '' }

function DashboardOverview() {
  const { properties, loading, error, addProperty, updateProperty, deleteProperty, refresh } = useProperties()
  const [query, setQuery] = useState(() => window.sessionStorage.getItem('estatehub-search') || '')
  const [sortBy, setSortBy] = useState('title')
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState('')
  const [formOpen, setFormOpen] = useState(false)
  const filteredProperties = useMemo(() => properties.filter((property) => `${property.title} ${property.location} ${property.tag}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => String(a[sortBy]).localeCompare(String(b[sortBy]))), [properties, query, sortBy])
  const changeQuery = (event) => { setQuery(event.target.value); window.sessionStorage.setItem('estatehub-search', event.target.value) }
  const saveRecord = (event) => { event.preventDefault(); if (!form.title.trim() || !form.location.trim() || !form.price.trim()) return; if (editingId) updateProperty(editingId, form); else addProperty({ ...form, views: '0' }); setForm(emptyForm); setEditingId(''); setFormOpen(false) }
  const editRecord = (property) => { setForm(property); setEditingId(property.id); setFormOpen(true) }
  const removeRecord = (id) => { if (window.confirm('Delete this property record?')) deleteProperty(id) }
  const stats = [{ label: 'Total properties', value: properties.length, change: 'Saved across devices', icon: 'H' }, { label: 'Active listings', value: properties.filter((property) => property.status === 'Active').length, change: 'Live in your portfolio', icon: '●' }, { label: 'Property types', value: new Set(properties.map((property) => property.type)).size, change: 'Houses, lands, villas, places', icon: '↗' }]

  return <section className="overview-panel"><div className="stats-grid">{stats.map((stat) => <StatCard {...stat} key={stat.label} />)}</div><div className="section-heading"><div><h2>Property records</h2><p className="subtle">API data, saved records, and CRUD updates stay in sync.</p></div><div className="record-actions"><Button variant="outline" onClick={refresh}>Refresh API</Button><Button onClick={() => { setForm(emptyForm); setEditingId(''); setFormOpen((current) => !current) }}>{formOpen ? 'Close form' : '+ Add property'}</Button></div></div>{formOpen && <PropertyForm form={form} setForm={setForm} editingId={editingId} onSubmit={saveRecord} onCancel={() => setFormOpen(false)} />}{error && <div className="data-alert">{error}</div>}<div className="record-toolbar"><input className="form-control" value={query} onChange={changeQuery} placeholder="Search properties..." aria-label="Search properties" /><select className="form-control sort-select" value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort properties"><option value="title">Sort by name</option><option value="location">Sort by location</option><option value="price">Sort by price</option></select></div>{loading && <div className="loading-state"><span className="spinner" /> Loading live property records...</div>}{!loading && filteredProperties.length === 0 && <EmptyState query={query} />}{filteredProperties.length > 0 && <><div className="record-cards">{filteredProperties.map((record) => <div className="record-item" key={record.id}><Link className="record-link" to={`/properties/${record.id}`}><PropertyCard {...record} /></Link><div className="record-controls"><Link className="text-link" to={`/properties/${record.id}`}>View</Link><button type="button" onClick={() => editRecord(record)}>Edit</button><button type="button" onClick={() => removeRecord(record.id)}>Delete</button></div></div>)}</div><div className="record-table-wrap"><table><caption>Property register</caption><thead><tr><th>Property</th><th>Location</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead><tbody>{filteredProperties.map((record) => <tr key={record.id}><td><Link to={`/properties/${record.id}`}>{record.title}</Link></td><td>{record.location}</td><td>{record.price}</td><td><span className={record.status === 'Active' ? 'status active-status' : 'status'}>{record.status}</span></td><td><button type="button" onClick={() => editRecord(record)}>Edit</button><button type="button" onClick={() => removeRecord(record.id)}>Delete</button></td></tr>)}</tbody></table></div></>}</section>
}

function PropertyForm({ form, setForm, editingId, onSubmit, onCancel }) {
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  return <form className="crud-form" onSubmit={onSubmit}><div><label>Property name<input className="form-control" name="title" value={form.title} onChange={update} required /></label><label>Location<input className="form-control" name="location" value={form.location} onChange={update} required /></label><label>Price<input className="form-control" name="price" value={form.price} onChange={update} placeholder="$850,000" required /></label></div><div><label>Status<select className="form-control" name="status" value={form.status} onChange={update}><option>Active</option><option>Review</option><option>Archived</option></select></label><label>Tag<input className="form-control" name="tag" value={form.tag} onChange={update} /></label><label>Description<textarea className="form-control" name="description" value={form.description} onChange={update} rows="2" /></label></div><div className="crud-form-actions"><Button variant="outline" onClick={onCancel}>Cancel</Button><Button type="submit">{editingId ? 'Save changes' : 'Add property'}</Button></div></form>
}

function EmptyState({ query }) { return <div className="empty-state"><strong>{query ? 'No matching properties' : 'No property records yet'}</strong><p>{query ? 'Try a different search term.' : 'Add your first local property record to see it here.'}</p></div> }

export default DashboardOverview
