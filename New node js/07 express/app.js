// -------------------------------------creating server with the help of HTTP------------------------------------------
// import http from 'http'

// let server = http.createServer((req, res) => {
//   res.end("hello i am anurag")

// })

// server.listen(8000, (err) => {
//   err ? console.log(err) : console.log("http://localhost:8000")
// })

//----------------------------------------------------------/------------------------------------------------------------


// -------------------------------------creating server with the help of express------------------------------------------

import express from 'express'
import path from 'path'
import { cwd } from 'process'

const  app = express()

 app.get('/', (req, res) => {
    res.sendFile(path.join(cwd(),'/views/index.html'))
  })

  app.get('/about', (req, res) => {
     res.sendFile(path.join(cwd(),'/views/about.html'))
   })

   app.get('/contact', (req, res) => {
    res.sendFile(path.join(cwd(),'/views/contact.html'))
  })

  app.get('/cart', (req, res) => {
    res.sendFile(path.join(cwd(),'/views/cart.html'))
  })
 

app.listen(8000, 'localhost' ,(err) => {
  if(err) throw err
  console.log("server is running on port 8000 http://localhost:8000")
})