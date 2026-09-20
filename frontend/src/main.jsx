import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { registerServiceWorker } from './registerServiceWorker.js'
import './styles/bootstrap.scss'
import './styles/variables.css'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppProvider><App /></AppProvider>
    </AuthProvider>
  </StrictMode>,
)

registerServiceWorker()
