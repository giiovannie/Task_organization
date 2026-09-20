import { useMemo, useState } from 'react'
import EmptyState from '../components/ui/EmptyState.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { useAppData } from '../hooks/useAppData.js'
import { formatDate } from '../utils/date.js'

const initialForm = { title: '', description: '', due_date: '', subject_id: '' }
const statusLabels = { pending: 'Pendiente', in_progress: 'En progreso', completed: 'Completada' }

const TasksPage = () => {
  const { data, addItem, updateItem, removeItem, notify } = useAppData()
  const [filter, setFilter] = useState('all')
  const [form, setForm] = useState(initialForm)
  const [editingId, setEditingId] = useState(null)
  const [noteDrafts, setNoteDrafts] = useState({})
  const [editingNote, setEditingNote] = useState({ id: null, content: '' })
  const visibleTasks = useMemo(() => filter === 'all' ? data.tasks : data.tasks.filter(({ status }) => status === filter), [data.tasks, filter])

  const submit = (event) => {
    event.preventDefault()
    if (!form.title || !form.due_date || !form.subject_id) return notify('Completá los campos obligatorios.', 'danger')
    const values = { ...form, subject_id: Number(form.subject_id) }
    if (editingId) updateItem('tasks', editingId, values)
    else addItem('tasks', { ...values, status: 'pending' })
    setForm(initialForm); setEditingId(null); notify(editingId ? 'Tarea actualizada.' : 'Tarea creada.')
  }

  const addNote = (taskId) => {
    const content = noteDrafts[taskId]?.trim()
    if (!content) return
    addItem('notes', { task_id: taskId, content })
    setNoteDrafts({ ...noteDrafts, [taskId]: '' }); notify('Nota agregada.')
  }

  return (
    <>
      <PageHeader eyebrow="Planificación" title="Tareas" description="Seguí pendientes, avances y tareas completadas." />
      <div className="row g-4">
        <div className="col-12 col-xl-8">
          <div className="d-flex flex-wrap gap-2 mb-3">
            {[['all', 'Todas'], ['pending', 'Pendientes'], ['in_progress', 'En progreso'], ['completed', 'Completadas']].map(([value, label]) => <button className={`btn btn-sm ${filter === value ? 'btn-primary' : 'btn-light'}`} key={value} onClick={() => setFilter(value)} type="button">{label}</button>)}
          </div>
          {visibleTasks.length === 0 ? <EmptyState title="No hay tareas aquí" message="Cambiá el filtro o creá una tarea." /> : visibleTasks.map((task) => (
            <article className={`card border-0 mb-3 task-card ${task.status === 'completed' ? 'is-complete' : ''}`} key={task.id}><div className="card-body p-4">
              <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
                <div><span className={`badge status-${task.status} mb-2`}>{statusLabels[task.status]}</span><h2 className="h5 mb-1">{task.title}</h2><p className="text-secondary mb-2">{task.description}</p><small>{data.subjects.find(({ id }) => id === task.subject_id)?.name} · {formatDate(task.due_date)}</small></div>
                <div className="d-flex flex-wrap align-content-start gap-2">
                  <select className="form-select form-select-sm status-select" value={task.status} onChange={(event) => { updateItem('tasks', task.id, { status: event.target.value }); notify('Estado actualizado.') }} aria-label="Estado de tarea">{Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>
                  <button className="btn btn-sm btn-outline-primary" onClick={() => { setEditingId(task.id); setForm({ title: task.title, description: task.description, due_date: task.due_date, subject_id: task.subject_id }) }} type="button">Editar</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem('tasks', task.id)} type="button">Eliminar</button>
                </div>
              </div>
              <div className="task-notes mt-3 pt-3 border-top"><strong className="small">Notas</strong>{data.notes.filter(({ task_id }) => task_id === task.id).map((note) => <div className="note-row" key={note.id}>{editingNote.id === note.id ? <div className="input-group input-group-sm"><input aria-label="Editar contenido de la nota" className="form-control" value={editingNote.content} onChange={(event) => setEditingNote({ ...editingNote, content: event.target.value })} /><button className="btn btn-outline-primary" onClick={() => { updateItem('notes', note.id, { content: editingNote.content }); setEditingNote({ id: null, content: '' }); notify('Nota actualizada.') }} type="button">Guardar</button></div> : <><span>{note.content}</span><span><button className="btn btn-sm btn-link" onClick={() => setEditingNote({ id: note.id, content: note.content })} type="button">Editar</button><button className="btn btn-sm btn-link text-danger" onClick={() => removeItem('notes', note.id)} type="button">Eliminar</button></span></>}</div>)}<div className="input-group input-group-sm mt-2"><input aria-label={`Nueva nota para ${task.title}`} className="form-control" value={noteDrafts[task.id] ?? ''} onChange={(event) => setNoteDrafts({ ...noteDrafts, [task.id]: event.target.value })} placeholder="Nueva nota" /><button className="btn btn-outline-secondary" onClick={() => addNote(task.id)} type="button">Agregar</button></div></div>
            </div></article>
          ))}
        </div>
        <div className="col-12 col-xl-4"><div className="card border-0 sticky-xl-top form-card"><div className="card-body p-4"><h2 className="h5 mb-3">{editingId ? 'Editar tarea' : 'Nueva tarea'}</h2><form onSubmit={submit}>
          <label className="form-label" htmlFor="task-title">Título *</label><input className="form-control mb-3" id="task-title" required value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} />
          <label className="form-label" htmlFor="task-description">Descripción</label><textarea className="form-control mb-3" id="task-description" rows="3" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} />
          <label className="form-label" htmlFor="task-subject">Materia *</label><select className="form-select mb-3" id="task-subject" required value={form.subject_id} onChange={(event) => setForm({ ...form, subject_id: event.target.value })}><option value="">Seleccionar</option>{data.subjects.map((subject) => <option key={subject.id} value={subject.id}>{subject.name}</option>)}</select>
          <label className="form-label" htmlFor="task-date">Fecha de entrega *</label><input className="form-control mb-3" id="task-date" required type="date" value={form.due_date} onChange={(event) => setForm({ ...form, due_date: event.target.value })} />
          <button className="btn btn-primary w-100" type="submit">{editingId ? 'Guardar cambios' : 'Crear tarea'}</button>{editingId && <button className="btn btn-link w-100" onClick={() => { setEditingId(null); setForm(initialForm) }} type="button">Cancelar</button>}
        </form></div></div></div>
      </div>
    </>
  )
}

export default TasksPage
