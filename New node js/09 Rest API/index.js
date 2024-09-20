import express from 'express'
import apiRouter from './router/apiRouter.js'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config({'path': './config/dev.config'})
const port = process.env.PORT

const app = express()

app.use(morgan('tiny'))

app.use('/user', apiRouter)

app.get('/',(req, res) => {
  res.send('<h2> Home Page </h2>')
})

app.listen(port, err => {
  err ? console.log(err) : console.log(`http://localhost:${port}`)
})