import 'dotenv/config'
import { app } from './src/app.js'
import { initializeDatabase } from './src/config/initializeDatabase.js'

const port = Number(process.env.PORT) || 3000

const startServer = async () => {
  try {
    await initializeDatabase()
    app.listen(port, () => {
      console.log(`Servidor iniciado en el puerto ${port}`)
    })
  } catch {
    console.error('No se pudo conectar con la base de datos')
    process.exitCode = 1
  }
}

startServer()
