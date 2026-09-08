import Button from './Button.jsx'
import './components.css'

function Navbar({ darkMode, onToggleTheme, onRegister }) {
  return <header className="navbar"><a className="brand" href="#top" aria-label="EstateHub home"><span className="brand-mark">e</span><span>estate<span>hub</span></span></a><nav className="nav-links" aria-label="Main navigation"><a className="active" href="#overview">Overview</a><a href="#listings">Listings</a><a href="#activity">Activity</a></nav><div className="nav-tools"><button className="theme-button" onClick={onToggleTheme} aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}>{darkMode ? '☼' : '☾'}</button><Button variant="outline" onClick={onRegister}>+ Add listing</Button><span className="avatar" aria-label="Profile">AS</span></div></header>
}

export default Navbar
