import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import './login.css'

function Login({ onLogin }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const validate = () => { const next = {}; if (!email.trim()) next.email = 'Email or username is required.'; if (!password) next.password = 'Password is required.'; return next }
  const handleSubmit = (event) => { event.preventDefault(); const next = validate(); setErrors(next); if (Object.keys(next).length) return; setStatus('loading'); setMessage('Checking your EstateHub account...'); window.setTimeout(() => { if (email === 'admin@estatehub.com' && password === 'EstateHub@123') { onLogin(); setStatus('success'); setMessage('Welcome back. Redirecting to your dashboard...'); window.setTimeout(() => navigate(location.state?.from?.pathname || '/dashboard'), 500) } else { setStatus('failure'); setMessage('Invalid credentials. Try admin@estatehub.com and EstateHub@123 for the demo.'); } }, 2000) }
  const clear = () => { setEmail(''); setPassword(''); setErrors({}); setMessage(''); setStatus('idle') }
  return <main className="auth-page"><section className="auth-visual"><p className="eyebrow">EstateHub / Access</p><h1>Find your next place in the world.</h1><p>One calm workspace for every property, conversation, and opportunity.</p><div className="auth-stat"><strong>4.9/5</strong><span>average experience from our community</span></div></section><section className="auth-card"><p className="eyebrow">Welcome back</p><h2>Sign in to EstateHub</h2><p className="subtle">Manage your portfolio from one place.</p>{status === 'success' && <div className="alert success-alert">✓ {message}</div>}{status === 'failure' && <div className="alert error-alert">! {message}</div>}{status === 'loading' && <div className="alert loading-alert"><span className="spinner" /> {message}</div>}<form onSubmit={handleSubmit} noValidate><label>Email or username<input className={errors.email ? 'form-control has-error' : 'form-control'} type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />{errors.email && <small className="form-error">{errors.email}</small>}</label><label>Password<div className="password-wrap"><input className={errors.password ? 'form-control has-error' : 'form-control'} type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" /><button type="button" className="password-toggle" onClick={() => setShowPassword((current) => !current)}>{showPassword ? 'Hide' : 'Show'}</button></div>{errors.password && <small className="form-error">{errors.password}</small>}</label><div className="auth-links"><a href="#forgot">Forgot password?</a><span>Demo login available</span></div><div className="auth-actions"><Button variant="outline" onClick={clear}>Clear</Button><Button type="submit" disabled={status === 'loading'}> {status === 'loading' ? 'Signing in...' : 'Login'} </Button></div></form><p className="register-prompt">New to EstateHub? <Link to="/register">Create an account</Link></p></section></main>
}

export default Login
