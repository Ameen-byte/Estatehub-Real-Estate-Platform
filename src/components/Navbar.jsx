import Button from './Button.jsx'
import './components.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar({ darkMode, onToggleTheme, isLoggedIn, onLogout }) {
  return <header className="navbar"><Link className="brand" to="/" aria-label="EstateHub home"><span className="brand-mark">e</span><span>estate<span>hub</span></span></Link><nav className="nav-links" aria-label="Main navigation"><NavLink to="/" end>Home</NavLink><NavLink to="/dashboard">Dashboard</NavLink><NavLink to="/properties/willow-house">Listings</NavLink></nav><div className="nav-tools"><button className="theme-button" onClick={onToggleTheme} aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}>{darkMode ? '☼' : '☾'}</button><Link className="button button-outline" to="/register">+ Add listing</Link>{isLoggedIn ? <Button variant="outline" onClick={onLogout}>Log out</Button> : <Link className="button button-outline" to="/login">Log in</Link>}<span className="avatar" aria-label="Profile">AS</span></div></header>
}

export default Navbar
