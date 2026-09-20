import { useState } from 'react'
import EmptyState from '../components/ui/EmptyState.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { useAppData } from '../hooks/useAppData.js'
import { daysRemaining, formatDate, urgencyClass } from '../utils/date.js'

const initialForm = { title: '', exam_date: '', topics: '', subject_id: '' }

const ExamsPage = () => {
  const { data, addItem, updateItem, removeItem, notify } = useAppData()
  const [form, setForm] = useState(initialForm)
  const [editingId, setEditingId] = useState(null)

  const submit = (event) => {
    event.preventDefault()
    if (!form.title || !form.exam_date || !form.subject_id) return notify('Completá los campos obligatorios.', 'danger')
    const values = { ...form, subject_id: Number(form.subject_id) }
    if (editingId) updateItem('exams', editingId, values)
    else addItem('exams', { ...values, grade: null })
    setForm(initialForm); setEditingId(null); notify(editingId ? 'Examen actualizado.' : 'Examen creado.')
  }

  return (
    <>
      <PageHeader eyebrow="Evaluaciones" title="Exámenes" description="Consultá fechas, temas y calificaciones." />
      <div className="row g-4">
        <div className="col-12 col-xl-8">
          {data.exams.length === 0 ? <EmptyState title="No hay exámenes" message="Agendá tu primera evaluación." /> : (
            <div className="row g-3">{data.exams.map((exam) => {
              const days = daysRemaining(exam.exam_date)
              const subject = data.subjects.find(({ id }) => id === exam.subject_id)
              return <div className="col-12 col-md-6" key={exam.id}><article className="card border-0 exam-card h-100"><div className="card-body p-4">
                <div className="d-flex justify-content-between gap-2 mb-3"><span className="small text-secondary">{subject?.name}</span>{exam.grade !== null ? <span className="grade-badge">Nota {exam.grade}</span> : <span className={`badge text-bg-${urgencyClass(days)}`}>{days < 0 ? 'Realizado' : days === 0 ? 'Hoy' : `${days} días`}</span>}</div>
                <h2 className="h5">{exam.title}</h2><p className="text-secondary small">{exam.topics}</p><p className="fw-semibold">{formatDate(exam.exam_date)}</p>
                <label className="form-label small" htmlFor={`grade-${exam.id}`}>Calificación</label><div className="input-group input-group-sm mb-3"><input className="form-control" id={`grade-${exam.id}`} max="10" min="1" type="number" value={exam.grade ?? ''} onChange={(event) => updateItem('exams', exam.id, { grade: event.target.value === '' ? null : Number(event.target.value) })} /><span className="input-group-text">/ 10</span></div>
                <div className="d-flex gap-2"><button className="btn btn-sm btn-outline-primary" onClick={() => { setEditingId(exam.id); setForm({ title: exam.title, exam_date: exam.exam_date, topics: exam.topics, subject_id: exam.subject_id }) }} type="button">Editar</button><button className="btn btn-sm btn-outline-danger" onClick={() => removeItem('exams', exam.id)} type="button">Eliminar</button></div>
              </div></article></div>
            })}</div>
          )}
        </div>
        <div className="col-12 col-xl-4"><div className="card border-0 form-card sticky-xl-top"><div className="card-body p-4"><h2 className="h5 mb-3">{editingId ? 'Editar examen' : 'Nuevo examen'}</h2><form onSubmit={submit}>
          <label className="form-label">Título *</label><input className="form-control mb-3" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} />
          <label className="form-label">Materia *</label><select className="form-select mb-3" value={form.subject_id} onChange={(event) => setForm({ ...form, subject_id: event.target.value })}><option value="">Seleccionar</option>{data.subjects.map((subject) => <option key={subject.id} value={subject.id}>{subject.name}</option>)}</select>
          <label className="form-label">Fecha *</label><input className="form-control mb-3" type="date" value={form.exam_date} onChange={(event) => setForm({ ...form, exam_date: event.target.value })} />
          <label className="form-label">Temas</label><textarea className="form-control mb-3" rows="3" value={form.topics} onChange={(event) => setForm({ ...form, topics: event.target.value })} />
          <button className="btn btn-primary w-100" type="submit">{editingId ? 'Guardar cambios' : 'Crear examen'}</button>{editingId && <button className="btn btn-link w-100" onClick={() => { setEditingId(null); setForm(initialForm) }} type="button">Cancelar</button>}
        </form></div></div></div>
      </div>
    </>
  )
}

export default ExamsPage
