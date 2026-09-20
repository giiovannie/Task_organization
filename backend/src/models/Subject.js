import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Subject = sequelize.define('Subject', {
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(160), allowNull: false },
  teacher_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  user_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
}, { tableName: 'subjects' })

export { Subject }
