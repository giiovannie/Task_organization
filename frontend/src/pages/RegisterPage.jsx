import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'
import { hasErrors, validateRegistration } from '../utils/validators.js'

const RegisterPage = () => {
  const [form, setForm] = useState({ email: '', password: '', confirmation: '' })
  const [errors, setErrors] = useState({})
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const submit = (event) => {
    event.preventDefault()
    const validation = validateRegistration(form)
    setErrors(validation)
    if (hasErrors(validation)) return
    signUp(form.email)
    navigate('/profile')
  }

  return (
    <div className="card auth-card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <p className="section-eyebrow mb-2">Empezá hoy</p>
        <h1 className="h3 mb-2">Creá tu cuenta</h1>
        <p className="text-secondary mb-4">Tu información académica, más ordenada.</p>
        <form onSubmit={submit} noValidate>
          {[
            ['email', 'Email', 'email'],
            ['password', 'Contraseña', 'password'],
            ['confirmation', 'Repetir contraseña', 'password'],
          ].map(([field, label, type]) => (
            <div className="mb-3" key={field}>
              <label className="form-label" htmlFor={`register-${field}`}>{label}</label>
              <input aria-describedby={errors[field] ? `register-${field}-error` : undefined} aria-invalid={Boolean(errors[field])} autoComplete={field === 'email' ? 'email' : 'new-password'} className={`form-control ${errors[field] ? 'is-invalid' : ''}`} id={`register-${field}`} type={type} value={form[field]} onChange={(event) => setForm({ ...form, [field]: event.target.value })} />
              <div className="invalid-feedback" id={`register-${field}-error`}>{errors[field]}</div>
            </div>
          ))}
          <button className="btn btn-primary w-100 mt-2" type="submit">Crear cuenta</button>
        </form>
        <p className="text-center mt-4 mb-0">¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link></p>
      </div>
    </div>
  )
}

export default RegisterPage
