import { sequelize } from '../models/index.js'

export const initializeDatabase = async () => {
  await sequelize.authenticate()
  await sequelize.sync()
}
