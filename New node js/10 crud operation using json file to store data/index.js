import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import apiRouter from './router/apiRouter.js'

const app = express()

dotenv.config({"path":'./config/dev.config'})
let port = process.env.PORT
// using a middleware
app.use(morgan('dev'))
app.use(urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send("<h2>Home page</h2>")
})

app.use('/api', apiRouter)

app.listen(8000, err => {
  err ? console.log(err) : console.log(`http://localhost:${port}`)
}) 