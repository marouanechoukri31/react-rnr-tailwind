import './global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App'
import { ThemeProvider } from './ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/* <ThemeProvider>
      <App />
    </ThemeProvider> */}
    <App/>
  </StrictMode>,
)
