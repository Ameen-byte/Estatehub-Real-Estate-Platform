import { useNavigate } from 'react-router-dom'
function Settings() { const navigate = useNavigate(); return <section className="simple-panel"><p className="eyebrow">Preferences</p><h2>Workspace settings</h2><p className="subtle">Your notification and portfolio preferences are ready to configure.</p><button className="button button-outline" type="button" onClick={() => navigate(-1)}>Go back</button></section> }
export default Settings
