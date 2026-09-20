import { useState } from 'react'
import EmptyState from '../components/ui/EmptyState.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { useAppData } from '../hooks/useAppData.js'

const emptySubject = { name: '', teacher_id: '' }

const SubjectsPage = () => {
  const { data, addItem, updateItem, removeItem, notify } = useAppData()
  const [form, setForm] = useState(emptySubject)
  const [editingId, setEditingId] = useState(null)
  const [teacherName, setTeacherName] = useState('')

  const submitSubject = (event) => {
    event.preventDefault()
    if (!form.name || !form.teacher_id) return notify('Completá la materia y el profesor.', 'danger')
    const values = { ...form, teacher_id: Number(form.teacher_id) }
    if (editingId) updateItem('subjects', editingId, values)
    else addItem('subjects', values)
    notify(editingId ? 'Materia actualizada.' : 'Materia creada.')
    setForm(emptySubject)
    setEditingId(null)
  }

  const submitTeacher = (event) => {
    event.preventDefault()
    if (!teacherName.trim()) return
    addItem('teachers', { name: teacherName.trim() })
    setTeacherName('')
    notify('Profesor agregado.')
  }

  return (
    <>
      <PageHeader eyebrow="Cursada" title="Materias" description="Administrá tus materias y profesores." />
      <div className="row g-4">
        <div className="col-12 col-xl-8">
          {data.subjects.length === 0 ? <EmptyState title="Todavía no hay materias" message="Creá tu primera materia para comenzar." /> : (
            <div className="row g-3">
              {data.subjects.map((subject) => {
                const teacher = data.teachers.find(({ id }) => id === subject.teacher_id)
                const taskCount = data.tasks.filter(({ subject_id }) => subject_id === subject.id).length
                return (
                  <div className="col-12 col-md-6" key={subject.id}>
                    <article className="card subject-card border-0 h-100"><div className="card-body p-4">
                      <div className="subject-color mb-3" /><h2 className="h5">{subject.name}</h2>
                      <p className="text-secondary mb-3">Profesor/a: {teacher?.name ?? 'Sin asignar'}</p>
                      <span className="badge bg-light text-dark mb-4">{taskCount} tareas</span>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary" onClick={() => { setEditingId(subject.id); setForm({ name: subject.name, teacher_id: subject.teacher_id }) }} type="button">Editar</button>
                        <button className="btn btn-sm btn-outline-danger" onClick={() => { removeItem('subjects', subject.id); notify('Materia eliminada.', 'warning') }} type="button">Eliminar</button>
                      </div>
                    </div></article>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        <div className="col-12 col-xl-4">
          <div className="card border-0 mb-4"><div className="card-body p-4">
            <h2 className="h5 mb-3">{editingId ? 'Editar materia' : 'Nueva materia'}</h2>
            <form onSubmit={submitSubject}>
              <label className="form-label" htmlFor="subject-name">Nombre</label>
              <input className="form-control mb-3" id="subject-name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
              <label className="form-label" htmlFor="subject-teacher">Profesor</label>
              <select className="form-select mb-3" id="subject-teacher" value={form.teacher_id} onChange={(event) => setForm({ ...form, teacher_id: event.target.value })}>
                <option value="">Seleccionar</option>{data.teachers.map((teacher) => <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)}
              </select>
              <button className="btn btn-primary w-100" type="submit">{editingId ? 'Guardar cambios' : 'Crear materia'}</button>
              {editingId && <button className="btn btn-link w-100 mt-2" onClick={() => { setEditingId(null); setForm(emptySubject) }} type="button">Cancelar</button>}
            </form>
          </div></div>
          <div className="card border-0"><div className="card-body p-4">
            <h2 className="h6 mb-3">Agregar profesor</h2>
            <form className="d-flex gap-2" onSubmit={submitTeacher}><input className="form-control" value={teacherName} onChange={(event) => setTeacherName(event.target.value)} placeholder="Nombre completo" /><button className="btn btn-secondary" type="submit">Agregar</button></form>
          </div></div>
        </div>
      </div>
    </>
  )
}

export default SubjectsPage
