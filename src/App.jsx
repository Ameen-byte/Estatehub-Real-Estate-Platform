import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import DashboardOverview from './pages/DashboardOverview.jsx'
import Profile from './pages/Profile.jsx'
import Settings from './pages/Settings.jsx'
import Details from './pages/Details.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'

function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return <BrowserRouter><div className={darkMode ? 'app-shell dark-mode' : 'app-shell'}><Routes><Route element={<Layout darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />}><Route path="/" element={<Home />} /><Route path="/register" element={<Register />} /><Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} /><Route path="/dashboard" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Dashboard /></ProtectedRoute>}><Route index element={<DashboardOverview />} /><Route path="overview" element={<DashboardOverview />} /><Route path="profile" element={<Profile />} /><Route path="settings" element={<Settings />} /></Route><Route path="/properties/:id" element={<Details />} /><Route path="*" element={<NotFound />} /></Route></Routes></div></BrowserRouter>
}

export default App
