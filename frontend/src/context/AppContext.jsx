import { useCallback, useEffect, useMemo, useState } from 'react'
import { initialData } from '../data/demoData.js'
import { AppContext } from './app-context.js'

const nextId = (items) => Math.max(0, ...items.map(({ id }) => id)) + 1

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(initialData)
  const [toast, setToast] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 450)
    return () => window.clearTimeout(timer)
  }, [])

  const notify = useCallback((message, variant = 'success') => {
    setToast({ message, variant })
    window.setTimeout(() => setToast(null), 2800)
  }, [])

  const addItem = useCallback((collection, item) => {
    setData((current) => ({
      ...current,
      [collection]: [...current[collection], { ...item, id: nextId(current[collection]) }],
    }))
  }, [])

  const updateItem = useCallback((collection, id, changes) => {
    setData((current) => ({
      ...current,
      [collection]: current[collection].map((item) => item.id === id ? { ...item, ...changes } : item),
    }))
  }, [])

  const removeItem = useCallback((collection, id) => {
    setData((current) => ({
      ...current,
      [collection]: current[collection].filter((item) => item.id !== id),
    }))
  }, [])

  const updateProfile = useCallback((profile) => {
    setData((current) => ({ ...current, profile: { ...current.profile, ...profile } }))
  }, [])

  const retry = useCallback(() => {
    setError(null)
    setIsLoading(true)
    window.setTimeout(() => setIsLoading(false), 450)
  }, [])

  const value = useMemo(() => ({ data, toast, isLoading, error, setError, retry, notify, addItem, updateItem, removeItem, updateProfile }), [
    data, toast, isLoading, error, retry, notify, addItem, updateItem, removeItem, updateProfile,
  ])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
