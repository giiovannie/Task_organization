import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Profile = sequelize.define('Profile', {
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  first_name: { type: DataTypes.STRING(80), allowNull: false },
  last_name: { type: DataTypes.STRING(80), allowNull: false },
  nickname: { type: DataTypes.STRING(80) },
  avatar_url: { type: DataTypes.STRING(500) },
  preferences: { type: DataTypes.JSON },
  user_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, unique: true },
}, { tableName: 'profiles' })

export default Profile
