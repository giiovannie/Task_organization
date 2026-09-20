import 'dotenv/config'
import app from './src/app.js'
import sequelize from './src/config/database.js'

const port = Number(process.env.PORT) || 3000

const startServer = async () => {
  try {
    await sequelize.authenticate()
    app.listen(port, () => {
      console.log(`Servidor iniciado en el puerto ${port}`)
    })
  } catch {
    console.error('No se pudo conectar con la base de datos')
    process.exitCode = 1
  }
}

startServer()
