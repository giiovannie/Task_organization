import { useState } from 'react'
import { EmptyState } from '../components/ui/EmptyState.jsx'
import { PageHeader } from '../components/ui/PageHeader.jsx'
import { useAppData } from '../hooks/useAppData.js'
import { formatDate } from '../utils/date.js'

const StudyPage = () => {
  const { data, addItem, updateItem, notify } = useAppData()
  const [form, setForm] = useState({ title: '', target_date: '', subject_id: '' })

  const submit = (event) => {
    event.preventDefault()
    if (!form.title || !form.target_date || !form.subject_id) return notify('Completá todos los campos.', 'danger')
    addItem('activities', { ...form, subject_id: Number(form.subject_id), status: 'pending' })
    setForm({ title: '', target_date: '', subject_id: '' }); notify('Actividad creada.')
  }

  return (
    <>
      <PageHeader eyebrow="Enfoque" title="Actividades de estudio" description="Organizá sesiones concretas para avanzar cada día." />
      <div className="row g-4">
        <div className="col-12 col-lg-7">
          {data.activities.length === 0 ? <EmptyState title="Sin actividades" message="Planificá una sesión de estudio." /> : data.activities.map((activity) => <article className={`card border-0 mb-3 ${activity.status === 'completed' ? 'is-complete' : ''}`} key={activity.id}><div className="card-body p-4 d-flex align-items-center gap-3"><input aria-label={`Marcar ${activity.title} como ${activity.status === 'completed' ? 'pendiente' : 'completada'}`} className="form-check-input activity-check" type="checkbox" checked={activity.status === 'completed'} onChange={(event) => { updateItem('activities', activity.id, { status: event.target.checked ? 'completed' : 'pending' }); notify('Actividad actualizada.') }} /><div><h2 className="h6 mb-1">{activity.title}</h2><p className="small text-secondary mb-0">{data.subjects.find(({ id }) => id === activity.subject_id)?.name} · {formatDate(activity.target_date)}</p></div></div></article>)}
        </div>
        <div className="col-12 col-lg-5"><div className="card border-0"><div className="card-body p-4"><h2 className="h5 mb-3">Nueva actividad</h2><form onSubmit={submit}>
          <label className="form-label" htmlFor="study-title">Actividad</label><input className="form-control mb-3" id="study-title" required value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="Ej. Repasar normalización" />
          <label className="form-label" htmlFor="study-subject">Materia</label><select className="form-select mb-3" id="study-subject" required value={form.subject_id} onChange={(event) => setForm({ ...form, subject_id: event.target.value })}><option value="">Seleccionar</option>{data.subjects.map((subject) => <option key={subject.id} value={subject.id}>{subject.name}</option>)}</select>
          <label className="form-label" htmlFor="study-date">Fecha objetivo</label><input className="form-control mb-3" id="study-date" required type="date" value={form.target_date} onChange={(event) => setForm({ ...form, target_date: event.target.value })} />
          <button className="btn btn-primary w-100" type="submit">Agregar actividad</button>
        </form></div></div></div>
      </div>
    </>
  )
}

export { StudyPage }
