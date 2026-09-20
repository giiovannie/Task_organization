import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const StudyActivity = sequelize.define('StudyActivity', {
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING(180), allowNull: false },
  target_date: { type: DataTypes.DATEONLY, allowNull: false },
  status: {
    type: DataTypes.ENUM('pending', 'completed'),
    allowNull: false,
    defaultValue: 'pending',
  },
  subject_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
}, { tableName: 'study_activities' })

export { StudyActivity }
