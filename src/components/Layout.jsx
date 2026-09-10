import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

function Layout({ darkMode, onToggleTheme, isLoggedIn, onLogout }) {
  const navigate = useNavigate()
  const location = useLocation()
  const handleLogout = () => { onLogout(); navigate('/login') }
  if (location.pathname === '/register') return <Outlet />
  return <><Navbar darkMode={darkMode} onToggleTheme={onToggleTheme} isLoggedIn={isLoggedIn} onLogout={location.pathname === '/login' ? undefined : handleLogout} /><Outlet /><Footer /></>
}

export default Layout
