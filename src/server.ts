import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import connectMongoose from './db/connection'
import debtRouter from 'routes/api/debts'

const app = express()
config()
app.use(cors())
app.use(express.json())
app.use('/api/debts', debtRouter)
const port = process.env.PORT || 3021

app.use((_: Request, res: Response) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err: TypeError, _: Request, res: Response, _1: NextFunction) => {
  res.status(500).json({ message: err.message })
})

const start = async () => {
  await connectMongoose()
  app.listen(port, () => {
    console.log(`Server running. Use our API on port: ${port}`)
  })
}

start()
