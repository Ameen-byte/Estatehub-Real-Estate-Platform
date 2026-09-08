import './components.css'

const links = [['Overview', 'overview'], ['My listings', 'my-listings'], ['Saved homes', 'saved-homes'], ['Appointments', 'appointments']]

function Sidebar() {
  return <aside className="sidebar"><div><p className="sidebar-label">Workspace</p>{links.map(([label, href], index) => <a className={index === 0 ? 'sidebar-link selected' : 'sidebar-link'} href={`#${href}`} key={label}><span>{index === 0 ? '[]' : index === 1 ? 'H' : index === 2 ? 'O' : 'T'}</span>{label}</a>)}</div><div><p className="sidebar-label">Manage</p><a className="sidebar-link" href="#settings"><span>+</span>Settings</a><a className="sidebar-link" href="#help"><span>?</span>Help center</a><div className="upgrade-box"><span className="upgrade-icon">*</span><strong>Grow your portfolio</strong><p>Unlock insights and reach more buyers.</p><button type="button">Explore Pro -&gt;</button></div></div></aside>
}

export default Sidebar
