import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'
import { cwd } from 'process'
import userRouter from './router/userRouter.js'

// Load configuration value
dotenv.config({ path: './config/dev.config' })
let port = process.env.PORT

const app = express()

app.use(morgan('tiny'))
app.use('/user', userRouter)

 app.get('/', (req, res) => {
    res.sendFile(path.join(cwd(),'/views/index.html'))
  })


//   app.get('/a   bout', (req, res) => {
//      res.sendFile(path.join(cwd(),'/views/about.html'))
//    })

//    app.get('/contact', (req, res) => {
//     res.sendFile(path.join(cwd(),'/views/contact.html'))
//   })

//   app.get('/cart', (req, res) => {
//     res.sendFile(path.join(cwd(),'/views/cart.html'))
//   })

app.listen(port, (err) => {
  if (err) throw err
  else console.log(`Server running on http://localhost:${port}`)
})