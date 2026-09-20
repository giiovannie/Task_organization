import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const TaskNote = sequelize.define('TaskNote', {
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  content: { type: DataTypes.TEXT, allowNull: false },
  task_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
}, { tableName: 'task_notes' })

export { TaskNote }
