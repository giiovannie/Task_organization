import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { errorHandler, notFoundHandler } from './middlewares/error.middleware.js'
import apiRouter from './routes/index.js'

const app = express()

app.disable('x-powered-by')
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }))
app.use(express.json())
app.use(cookieParser())
app.use('/api', apiRouter)
app.use(notFoundHandler)
app.use(errorHandler)

export default app
