import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/theme.css'

createRoot(document.getElementById('ramya-root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
