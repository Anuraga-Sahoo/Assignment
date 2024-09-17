const http = require('http')

let server = http.createServer((req, res) => {
  res.end("hello gm")
})

server.listen(8080, err => {
  if(err) throw err
  else console.log("server is running on http://localhost:8080")
})