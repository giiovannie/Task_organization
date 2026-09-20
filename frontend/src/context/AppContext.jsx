import { useCallback, useMemo, useState } from 'react'
import { initialData } from '../data/demoData.js'
import { AppContext } from './app-context.js'

const nextId = (items) => Math.max(0, ...items.map(({ id }) => id)) + 1

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(initialData)
  const [toast, setToast] = useState(null)

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

  const value = useMemo(() => ({ data, toast, notify, addItem, updateItem, removeItem, updateProfile }), [
    data, toast, notify, addItem, updateItem, removeItem, updateProfile,
  ])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
