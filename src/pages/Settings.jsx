import { useState } from 'react'
function Settings() {
	const [emailUpdates, setEmailUpdates] = useState(() => window.localStorage.getItem('estatehub-email-updates') !== 'false')
	const [compactCards, setCompactCards] = useState(() => window.localStorage.getItem('estatehub-compact-cards') === 'true')
	const updatePreference = (key, value, setter) => { setter(value); window.localStorage.setItem(key, String(value)) }
	return <section className="simple-panel"><p className="eyebrow">Preferences</p><h2>Workspace settings</h2><p className="subtle">Choose how EstateHub keeps you informed and presents listings.</p><div className="settings-list"><label><input type="checkbox" checked={emailUpdates} onChange={(event) => updatePreference('estatehub-email-updates', event.target.checked, setEmailUpdates)} /> Email updates about saved properties</label><label><input type="checkbox" checked={compactCards} onChange={(event) => updatePreference('estatehub-compact-cards', event.target.checked, setCompactCards)} /> Use compact property cards</label></div></section>
}

export default Settings
