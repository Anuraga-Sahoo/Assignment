import http from 'http'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({'path': './config/dev.config'})

let port = process.env.PORT
let host = process.env.HOST

let server = http.createServer((req, res) => {
res.end("hello")
})

server.listen(port, host, (err) => {
  err ? console.log(err) : console.log(`http://${host}:${port}`)
})