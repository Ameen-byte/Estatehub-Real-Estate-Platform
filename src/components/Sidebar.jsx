import './components.css'
import { NavLink, useNavigate } from 'react-router-dom'

const links = [['Overview', '/dashboard/overview'], ['My listings', '/dashboard/overview'], ['Saved homes', '/saved-homes'], ['Appointments', '/dashboard/settings']]

function Sidebar() {
  const navigate = useNavigate()
  return <aside className="sidebar"><div><p className="sidebar-label">Workspace</p>{links.map(([label, href], index) => <NavLink className={({ isActive }) => isActive || (index === 0 && window.location.pathname === '/dashboard') ? 'sidebar-link selected' : 'sidebar-link'} to={href} key={label}><span>{index === 0 ? '[]' : index === 1 ? 'H' : index === 2 ? 'O' : 'T'}</span>{label}</NavLink>)}</div><div><p className="sidebar-label">Manage</p><NavLink className="sidebar-link" to="/dashboard/settings"><span>+</span>Settings</NavLink><button className="sidebar-link" type="button" onClick={() => window.alert('EstateHub support is available at support@estatehub.com.')}><span>?</span>Help center</button><div className="upgrade-box"><span className="upgrade-icon">*</span><strong>Grow your portfolio</strong><p>Unlock insights and reach more buyers.</p><button type="button" onClick={() => navigate('/register')}>Explore Pro -&gt;</button></div></div></aside>
}

export default Sidebar
