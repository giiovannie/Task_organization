import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const submit = (event) => {
    event.preventDefault()
    if (!form.email || !form.password) return setError('Completá email y contraseña.')
    signIn(form.email)
    navigate('/')
  }

  return (
    <div className="card auth-card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <p className="section-eyebrow mb-2">Bienvenido de nuevo</p>
        <h1 className="h3 mb-2">Iniciá sesión</h1>
        <p className="text-secondary mb-4">Continuá organizando tu cursada.</p>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <form onSubmit={submit} noValidate>
          <label className="form-label" htmlFor="login-email">Email</label>
          <input className="form-control mb-3" id="login-email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="estudiante@email.com" />
          <label className="form-label" htmlFor="login-password">Contraseña</label>
          <input className="form-control mb-4" id="login-password" type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="••••••••" />
          <button className="btn btn-primary w-100" type="submit">Ingresar</button>
        </form>
        <p className="text-center mt-4 mb-0">¿No tenés cuenta? <Link to="/register">Registrate</Link></p>
      </div>
    </div>
  )
}

export default LoginPage
