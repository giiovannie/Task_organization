import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader.jsx'
import { useAppData } from '../hooks/useAppData.js'
import { useAuth } from '../hooks/useAuth.js'

const ProfilePage = () => {
  const { data, updateProfile, notify } = useAppData()
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState(data.profile)

  const submit = (event) => {
    event.preventDefault()
    updateProfile(form); notify('Perfil actualizado.')
  }

  return (
    <>
      <PageHeader eyebrow="Cuenta" title="Tu perfil" description="Personalizá cómo querés verte en Organiza." />
      <div className="row g-4">
        <div className="col-12 col-lg-4"><div className="card border-0 text-center"><div className="card-body p-4"><div className="profile-avatar mx-auto mb-3">{form.name.charAt(0)}{form.last_name.charAt(0)}</div><h2 className="h5 mb-1">{form.name} {form.last_name}</h2><p className="text-secondary">@{form.nickname}</p><p className="small mb-4">{user?.email}</p><button className="btn btn-outline-danger" onClick={() => { signOut(); navigate('/login') }} type="button">Cerrar sesión</button></div></div></div>
        <div className="col-12 col-lg-8"><div className="card border-0"><div className="card-body p-4 p-md-5"><h2 className="h5 mb-4">Información personal</h2><form onSubmit={submit}><div className="row g-3">
          {[['name', 'Nombre'], ['last_name', 'Apellido'], ['nickname', 'Apodo'], ['avatar_url', 'URL del avatar']].map(([field, label]) => <div className={field === 'avatar_url' ? 'col-12' : 'col-12 col-md-6'} key={field}><label className="form-label" htmlFor={`profile-${field}`}>{label}</label><input className="form-control" id={`profile-${field}`} value={form[field] ?? ''} onChange={(event) => setForm({ ...form, [field]: event.target.value })} /></div>)}
          <div className="col-12"><button className="btn btn-primary mt-2" type="submit">Guardar perfil</button></div>
        </div></form></div></div></div>
      </div>
    </>
  )
}

export default ProfilePage
