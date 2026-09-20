import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Teacher = sequelize.define('Teacher', {
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(160), allowNull: false },
  user_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
}, { tableName: 'teachers' })

export default Teacher
