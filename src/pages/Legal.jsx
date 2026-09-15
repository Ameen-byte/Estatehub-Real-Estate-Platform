import { Link, useLocation } from 'react-router-dom'

function Legal() {
  const { pathname } = useLocation()
  const isPrivacy = pathname.endsWith('privacy')
  return <main className="simple-page"><p className="eyebrow">EstateHub / {isPrivacy ? 'Privacy' : 'Terms'}</p><h1>{isPrivacy ? 'Privacy policy' : 'Terms of service'}</h1><p className="subtle">This demo workspace stores preferences and property records in your browser. No information is sent to a server by this frontend.</p><h2>{isPrivacy ? 'Your data' : 'Using EstateHub'}</h2><p className="subtle">{isPrivacy ? 'You can clear saved accounts, properties, and preferences from your browser storage at any time.' : 'Use the listings and saved-home tools for planning and organization. Verify property information independently before making a real-world decision.'}</p><Link className="text-link" to="/">Return home →</Link></main>
}

export default Legal