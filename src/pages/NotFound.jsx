import { Link } from 'react-router-dom'
function NotFound() { return <main className="simple-page not-found"><span className="not-found-code">404</span><h1>This page wandered off.</h1><p className="subtle">The address does not point to an EstateHub space.</p><Link className="button button-primary" to="/">Return to home</Link></main> }
export default NotFound
