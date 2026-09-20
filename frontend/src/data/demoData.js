export const initialData = {
  profile: { id: 1, user_id: 1, name: 'Iván', last_name: 'Gómez', nickname: 'IvanDev', avatar_url: null },
  teachers: [{ id: 1, name: 'Laura Méndez' }, { id: 2, name: 'Martín Silva' }],
  subjects: [
    { id: 1, name: 'Programación', teacher_id: 1 },
    { id: 2, name: 'Base de Datos', teacher_id: 2 },
    { id: 3, name: 'Matemática', teacher_id: 1 },
  ],
  tasks: [
    { id: 1, title: 'Trabajo práctico API', description: 'Preparar endpoints y documentación.', due_date: '2026-09-24', status: 'in_progress', subject_id: 1 },
    { id: 2, title: 'Ejercicios de normalización', description: 'Resolver la guía completa.', due_date: '2026-09-27', status: 'pending', subject_id: 2 },
    { id: 3, title: 'Guía de matrices', description: 'Entregar ejercicios seleccionados.', due_date: '2026-09-18', status: 'completed', subject_id: 3 },
  ],
  notes: [{ id: 1, task_id: 1, content: 'Consultar al profesor sobre Sequelize.' }],
  exams: [
    { id: 1, title: 'Primer parcial', exam_date: '2026-09-28', topics: 'Express, Sequelize y APIs', grade: null, subject_id: 1 },
    { id: 2, title: 'Evaluación SQL', exam_date: '2026-10-05', topics: 'JOIN, subconsultas y normalización', grade: null, subject_id: 2 },
    { id: 3, title: 'Álgebra', exam_date: '2026-09-10', topics: 'Matrices', grade: 8, subject_id: 3 },
  ],
  activities: [
    { id: 1, title: 'Repasar Sequelize', target_date: '2026-09-23', status: 'pending', subject_id: 1 },
    { id: 2, title: 'Practicar consultas JOIN', target_date: '2026-09-25', status: 'completed', subject_id: 2 },
  ],
  notifications: [
    { id: 1, type: 'exam', message: 'Faltan pocos días para el parcial de Programación', read: false },
    { id: 2, type: 'task', message: 'La tarea de Base de Datos vence esta semana', read: false },
    { id: 3, type: 'study', message: 'Tenés una actividad de estudio pendiente', read: true },
  ],
}
