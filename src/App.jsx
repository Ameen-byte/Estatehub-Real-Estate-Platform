import { useState } from 'react'
import Home from './pages/Home.jsx'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'app-shell dark-mode' : 'app-shell'}>
      <Home darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} />
    </div>
  )
}

export default App
