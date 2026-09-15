import { useState } from 'react'
import Button from '../components/Button.jsx'
function Profile() {
	const savedUser = JSON.parse(window.localStorage.getItem('estatehub-user') || '{"name":"Ameen Siddiqui","email":"admin@estatehub.com"}')
	const [name, setName] = useState(savedUser.name || 'Ameen Siddiqui')
	const [email, setEmail] = useState(savedUser.email || '')
	const [saved, setSaved] = useState(false)
	const saveProfile = (event) => { event.preventDefault(); window.localStorage.setItem('estatehub-user', JSON.stringify({ ...savedUser, name, email })); setSaved(true) }
	return <section className="simple-panel"><p className="eyebrow">Account</p><h2>Your profile</h2><p className="subtle">Keep your EstateHub contact details current.</p><form className="profile-form" onSubmit={saveProfile}><label>Full name<input className="form-control" value={name} onChange={(event) => setName(event.target.value)} required /></label><label>Email address<input className="form-control" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label><Button type="submit">Save profile</Button>{saved && <span className="subtle" role="status">Profile saved.</span>}</form></section>
}

export default Profile
