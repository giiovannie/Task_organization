import 'dotenv/config'
import app from './src/app.js'

const port = Number(process.env.PORT) || 3000

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`)
})
