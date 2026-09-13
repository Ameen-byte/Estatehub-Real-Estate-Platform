import { useEffect, useState } from 'react'
import { properties as fallbackProperties } from '../data/properties.js'

const STORAGE_KEY = 'estatehub-properties'

function readStoredProperties() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : fallbackProperties
  } catch {
    return fallbackProperties
  }
}

function useProperties() {
  const [properties, setProperties] = useState(readStoredProperties)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    let cancelled = false
    const loadProperties = async () => {
      setLoading(true)
      setError('')
      try {
        const response = await fetch('https://dummyjson.com/products?limit=8')
        if (!response.ok) throw new Error('API request failed')
        const result = await response.json()
        if (!cancelled) {
          const apiProperties = result.products.map((item) => ({ id: `api-${item.id}`, title: item.title, location: item.brand || 'EstateHub marketplace', price: `$${item.price.toLocaleString()}`, tag: item.category, image: item.thumbnail, status: item.stock > 0 ? 'Active' : 'Review', views: `${item.stock || 0}`, description: item.description }))
          setProperties((current) => { const localOnly = current.filter((item) => !item.id.startsWith('api-')); return [...localOnly, ...apiProperties] })
        }
      } catch {
        if (!cancelled) setError('Live property data is unavailable. Showing saved EstateHub records instead.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    loadProperties()
    return () => { cancelled = true }
  }, [refreshKey])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(properties))
  }, [properties])

  const addProperty = (property) => setProperties((current) => [{ ...property, id: `local-${Date.now()}` }, ...current])
  const updateProperty = (id, changes) => setProperties((current) => current.map((property) => property.id === id ? { ...property, ...changes } : property))
  const deleteProperty = (id) => setProperties((current) => current.filter((property) => property.id !== id))
  const refresh = () => setRefreshKey((current) => current + 1)

  return { properties, loading, error, addProperty, updateProperty, deleteProperty, refresh }
}

export default useProperties
