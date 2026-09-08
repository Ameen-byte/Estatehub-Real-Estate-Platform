import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import './register.css'

const initialForm = { fullName: '', email: '', mobile: '', password: '', confirmPassword: '', gender: '', dateOfBirth: '', collegeName: '', branch: '', graduationYear: '', skills: '', resume: '', terms: false }

function Register({ darkMode, onToggleTheme, onBack }) {
  const [fullName, setFullName] = useState(initialForm.fullName)
  const [email, setEmail] = useState(initialForm.email)
  const [mobile, setMobile] = useState(initialForm.mobile)
  const [password, setPassword] = useState(initialForm.password)
  const [confirmPassword, setConfirmPassword] = useState(initialForm.confirmPassword)
  const [gender, setGender] = useState(initialForm.gender)
  const [dateOfBirth, setDateOfBirth] = useState(initialForm.dateOfBirth)
  const [collegeName, setCollegeName] = useState(initialForm.collegeName)
  const [branch, setBranch] = useState(initialForm.branch)
  const [graduationYear, setGraduationYear] = useState(initialForm.graduationYear)
  const [skills, setSkills] = useState(initialForm.skills)
  const [resume, setResume] = useState(initialForm.resume)
  const [terms, setTerms] = useState(initialForm.terms)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const clearForm = () => {
    setFullName(''); setEmail(''); setMobile(''); setPassword(''); setConfirmPassword(''); setGender(''); setDateOfBirth(''); setCollegeName(''); setBranch(''); setGraduationYear(''); setSkills(''); setResume(''); setTerms(false); setErrors({}); setSuccess(false)
  }

  const handleChange = (event, setter) => {
    setter(event.target.type === 'checkbox' ? event.target.checked : event.target.value)
    setSuccess(false)
  }

  const validate = () => {
    const nextErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/
    if (!fullName.trim()) nextErrors.fullName = 'Full name is required.'
    if (!email.trim()) nextErrors.email = 'Email address is required.'
    else if (!emailPattern.test(email)) nextErrors.email = 'Enter a valid email address.'
    if (!mobile.trim()) nextErrors.mobile = 'Mobile number is required.'
    else if (!/^\d{10}$/.test(mobile)) nextErrors.mobile = 'Mobile number must contain exactly 10 digits.'
    if (!password) nextErrors.password = 'Password is required.'
    else if (!passwordPattern.test(password)) nextErrors.password = 'Use 8+ characters with uppercase, lowercase, number, and special character.'
    if (!confirmPassword) nextErrors.confirmPassword = 'Please confirm your password.'
    else if (password !== confirmPassword) nextErrors.confirmPassword = 'Passwords do not match.'
    if (!gender) nextErrors.gender = 'Select a gender.'
    if (!dateOfBirth) nextErrors.dateOfBirth = 'Date of birth is required.'
    if (!collegeName.trim()) nextErrors.collegeName = 'College name is required.'
    if (!branch) nextErrors.branch = 'Select your branch.'
    if (!graduationYear) nextErrors.graduationYear = 'Select your graduation year.'
    if (!skills.trim()) nextErrors.skills = 'Add at least one skill.'
    if (!resume) nextErrors.resume = 'Please upload your resume.'
    if (!terms) nextErrors.terms = 'Accept the terms to continue.'
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    clearForm()
    setSuccess(true)
  }

  const passwordScore = [password.length >= 8, /[A-Z]/.test(password), /[a-z]/.test(password), /\d/.test(password), /[^\da-zA-Z]/.test(password)].filter(Boolean).length
  const inputClass = (field) => errors[field] ? 'form-control has-error' : 'form-control'

  return <div className="page-layout"><Sidebar /><div className="content-wrap"><Navbar darkMode={darkMode} onToggleTheme={onToggleTheme} onRegister={onBack} /><main className="register-main"><button className="back-link" type="button" onClick={onBack}>← Back to overview</button><div className="register-intro"><p className="eyebrow">Join EstateHub</p><h1>Create your account.</h1><p className="subtle">Build your profile and start connecting with the right opportunities.</p></div>{success && <div className="success-banner" role="status"><strong>Registration successful.</strong> Your EstateHub account details have been submitted.</div>}<form className="registration-form" onSubmit={handleSubmit} noValidate><section className="form-section"><div className="form-section-heading"><span className="step-number">01</span><div><h2>Personal details</h2><p className="subtle">Tell us a little about yourself.</p></div></div><div className="form-grid"><Field label="Full name" required error={errors.fullName}><input className={inputClass('fullName')} value={fullName} onChange={(event) => handleChange(event, setFullName)} placeholder="e.g. Ameen Siddiqui" /></Field><Field label="Email address" required error={errors.email}><input className={inputClass('email')} type="email" value={email} onChange={(event) => handleChange(event, setEmail)} placeholder="you@example.com" /></Field><Field label="Mobile number" required error={errors.mobile}><input className={inputClass('mobile')} inputMode="numeric" maxLength="10" value={mobile} onChange={(event) => handleChange(event, setMobile)} placeholder="10 digit number" /></Field><Field label="Gender" required error={errors.gender}><select className={inputClass('gender')} value={gender} onChange={(event) => handleChange(event, setGender)}><option value="">Select gender</option><option>Female</option><option>Male</option><option>Non-binary</option><option>Prefer not to say</option></select></Field><Field label="Date of birth" required error={errors.dateOfBirth}><input className={inputClass('dateOfBirth')} type="date" value={dateOfBirth} onChange={(event) => handleChange(event, setDateOfBirth)} /></Field></div></section><section className="form-section"><div className="form-section-heading"><span className="step-number">02</span><div><h2>Education & skills</h2><p className="subtle">Share your academic background.</p></div></div><div className="form-grid"><Field label="College name" required error={errors.collegeName}><input className={inputClass('collegeName')} value={collegeName} onChange={(event) => handleChange(event, setCollegeName)} placeholder="Your college or university" /></Field><Field label="Branch" required error={errors.branch}><select className={inputClass('branch')} value={branch} onChange={(event) => handleChange(event, setBranch)}><option value="">Select branch</option><option>Computer Science</option><option>Information Technology</option><option>Business Administration</option><option>Architecture</option><option>Other</option></select></Field><Field label="Graduation year" required error={errors.graduationYear}><select className={inputClass('graduationYear')} value={graduationYear} onChange={(event) => handleChange(event, setGraduationYear)}><option value="">Select year</option>{[2026, 2027, 2028, 2029, 2030].map((year) => <option key={year}>{year}</option>)}</select></Field><Field label="Skills" required error={errors.skills} wide><textarea className={inputClass('skills')} maxLength="160" value={skills} onChange={(event) => handleChange(event, setSkills)} placeholder="React, communication, research..." rows="3" /><span className="character-count">{skills.length}/160</span></Field><Field label="Resume upload" required error={errors.resume} wide><input className={inputClass('resume')} type="file" accept=".pdf,.doc,.docx" onChange={(event) => setResume(event.target.files?.[0]?.name || '')} /></Field></div></section><section className="form-section"><div className="form-section-heading"><span className="step-number">03</span><div><h2>Secure your account</h2><p className="subtle">Choose a strong password for your profile.</p></div></div><div className="form-grid"><Field label="Password" required error={errors.password}><div className="password-wrap"><input className={inputClass('password')} type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => handleChange(event, setPassword)} placeholder="Create a password" /><button type="button" className="password-toggle" onClick={() => setShowPassword((current) => !current)}>{showPassword ? 'Hide' : 'Show'}</button></div>{password && <div className="strength"><span>Password strength: {passwordScore < 3 ? 'Weak' : passwordScore < 5 ? 'Good' : 'Strong'}</span><div className="strength-bars">{[1, 2, 3, 4, 5].map((bar) => <i className={bar <= passwordScore ? 'filled' : ''} key={bar} />)}</div></div>}</Field><Field label="Confirm password" required error={errors.confirmPassword}><input className={inputClass('confirmPassword')} type={showPassword ? 'text' : 'password'} value={confirmPassword} onChange={(event) => handleChange(event, setConfirmPassword)} placeholder="Repeat your password" /></Field></div></section><label className={errors.terms ? 'terms has-error' : 'terms'}><input type="checkbox" checked={terms} onChange={(event) => handleChange(event, setTerms)} /> <span>I accept the <a href="#terms">Terms & Conditions</a> and Privacy Policy.</span></label>{errors.terms && <p className="form-error terms-error">{errors.terms}</p>}<div className="form-actions"><Button variant="outline" onClick={clearForm}>Reset</Button><Button type="submit">Register account →</Button></div></form></main><Footer /></div></div>
}

function Field({ label, required, error, children, wide = false }) {
  return <div className={wide ? 'field field-wide' : 'field'}><label>{label}{required && <span className="required"> *</span>}</label>{children}{error && <p className="form-error">{error}</p>}</div>
}

export default Register
