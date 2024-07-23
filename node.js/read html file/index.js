const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
  console.log(req.url)
  fs.readFile("index.html", 'utf8' , (err, data) => {
    if(err) throw err
    res.end(data)
  })
})

server.listen(8080, '127.0.0.1', (err) => {
  if(err) throw err
  else console.log(`server is running on http://localhost:8080`)
})