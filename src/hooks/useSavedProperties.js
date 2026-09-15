import { useEffect, useState } from 'react'

const STORAGE_KEY = 'estatehub-saved-properties'

function readSavedProperties() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

function useSavedProperties() {
  const [savedIds, setSavedIds] = useState(readSavedProperties)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds))
  }, [savedIds])

  useEffect(() => {
    const syncSaved = () => setSavedIds(readSavedProperties())
    window.addEventListener('estatehub-saved-properties-change', syncSaved)
    window.addEventListener('storage', syncSaved)
    return () => { window.removeEventListener('estatehub-saved-properties-change', syncSaved); window.removeEventListener('storage', syncSaved) }
  }, [])

  const toggleSaved = (id) => {
    setSavedIds((current) => {
      const next = current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id]
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      window.dispatchEvent(new Event('estatehub-saved-properties-change'))
      return next
    })
  }

  return { savedIds, toggleSaved }
}

export default useSavedProperties
