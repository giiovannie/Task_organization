const TaskForm = ({ editing, form, subjects, onCancel, onChange, onSubmit }) => (
  <div className="card border-0 sticky-xl-top form-card">
    <div className="card-body p-4">
      <h2 className="h5 mb-3">{editing ? 'Editar tarea' : 'Nueva tarea'}</h2>
      <form onSubmit={onSubmit}>
        <label className="form-label" htmlFor="task-title">Título *</label>
        <input className="form-control mb-3" id="task-title" required value={form.title} onChange={(event) => onChange('title', event.target.value)} />
        <label className="form-label" htmlFor="task-description">Descripción</label>
        <textarea className="form-control mb-3" id="task-description" rows="3" value={form.description} onChange={(event) => onChange('description', event.target.value)} />
        <label className="form-label" htmlFor="task-subject">Materia *</label>
        <select className="form-select mb-3" id="task-subject" required value={form.subject_id} onChange={(event) => onChange('subject_id', event.target.value)}>
          <option value="">Seleccionar</option>
          {subjects.map((subject) => <option key={subject.id} value={subject.id}>{subject.name}</option>)}
        </select>
        <label className="form-label" htmlFor="task-date">Fecha de entrega *</label>
        <input className="form-control mb-3" id="task-date" required type="date" value={form.due_date} onChange={(event) => onChange('due_date', event.target.value)} />
        <button className="btn btn-primary w-100" type="submit">{editing ? 'Guardar cambios' : 'Crear tarea'}</button>
        {editing && <button className="btn btn-link w-100" onClick={onCancel} type="button">Cancelar</button>}
      </form>
    </div>
  </div>
)

export { TaskForm }
