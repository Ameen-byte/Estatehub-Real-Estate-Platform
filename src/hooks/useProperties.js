import { useEffect, useState } from 'react'
import { properties as fallbackProperties } from '../data/properties.js'

const STORAGE_KEY = 'estatehub-properties'

function readStoredProperties() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const records = stored ? JSON.parse(stored) : fallbackProperties
    const supportedRecords = Array.isArray(records) ? records.filter((property) => ['House', 'Land', 'Villa', 'Place'].includes(property.type)) : []
    return supportedRecords.length ? supportedRecords : fallbackProperties
  } catch {
    return fallbackProperties
  }
}

function useProperties() {
  const [properties, setProperties] = useState(readStoredProperties)
  const [loading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(properties))
  }, [properties])

  const addProperty = (property) => setProperties((current) => [{ ...property, id: `local-${Date.now()}` }, ...current])
  const updateProperty = (id, changes) => setProperties((current) => current.map((property) => property.id === id ? { ...property, ...changes } : property))
  const deleteProperty = (id) => setProperties((current) => current.filter((property) => property.id !== id))
  const refresh = () => { setError(''); setProperties(readStoredProperties()) }

  return { properties, loading, error, addProperty, updateProperty, deleteProperty, refresh }
}

export default useProperties
