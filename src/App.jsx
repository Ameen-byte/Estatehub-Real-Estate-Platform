import { useState } from 'react'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [page, setPage] = useState('home')

  return (
    <div className={darkMode ? 'app-shell dark-mode' : 'app-shell'}>
      {page === 'register' ? <Register darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} onBack={() => setPage('home')} /> : <Home darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} onRegister={() => setPage('register')} />}
    </div>
  )
}

export default App
