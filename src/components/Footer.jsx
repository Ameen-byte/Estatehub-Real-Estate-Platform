import './components.css'
import { Link } from 'react-router-dom'

function Footer() { return <footer className="footer"><span>Copyright 2026 EstateHub</span><span>Making space for better living.</span><span><Link to="/legal/privacy">Privacy</Link> <Link to="/legal/terms">Terms</Link></span></footer> }

export default Footer
