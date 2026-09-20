import { useContext } from 'react'
import { AppContext } from '../context/app-context.js'

export const useAppData = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppData debe utilizarse dentro de AppProvider.')
  return context
}
