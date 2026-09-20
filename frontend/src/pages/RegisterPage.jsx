import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'

const RegisterPage = () => {
  const [form, setForm] = useState({ email: '', password: '', confirmation: '' })
  const [error, setError] = useState('')
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const submit = (event) => {
    event.preventDefault()
    if (!form.email || !form.password) return setError('Completá los campos obligatorios.')
    if (form.password !== form.confirmation) return setError('Las contraseñas no coinciden.')
    signUp(form.email)
    navigate('/profile')
  }

  return (
    <div className="card auth-card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <p className="section-eyebrow mb-2">Empezá hoy</p>
        <h1 className="h3 mb-2">Creá tu cuenta</h1>
        <p className="text-secondary mb-4">Tu información académica, más ordenada.</p>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <form onSubmit={submit}>
          {[
            ['email', 'Email', 'email'],
            ['password', 'Contraseña', 'password'],
            ['confirmation', 'Repetir contraseña', 'password'],
          ].map(([field, label, type]) => (
            <div className="mb-3" key={field}>
              <label className="form-label" htmlFor={`register-${field}`}>{label}</label>
              <input className="form-control" id={`register-${field}`} type={type} value={form[field]} onChange={(event) => setForm({ ...form, [field]: event.target.value })} />
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
