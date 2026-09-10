import { NavLink, Outlet } from 'react-router-dom'
import './dashboard.css'

function Dashboard() {
	return <main className="dashboard-page"><div className="dashboard-top"><div><p className="eyebrow">Private workspace</p><h1>Portfolio dashboard</h1></div><span className="live-pill">● Live workspace</span></div><nav className="dashboard-tabs" aria-label="Dashboard sections"><NavLink to="overview">Overview</NavLink><NavLink to="profile">Profile</NavLink><NavLink to="settings">Settings</NavLink></nav><Outlet /></main>
}

export default Dashboard
