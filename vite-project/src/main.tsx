import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WrappedApp from './components/WrappedApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WrappedApp />
  </StrictMode>,
)
