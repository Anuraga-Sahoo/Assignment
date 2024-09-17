const fs = require('fs')
const path = require('path')
const http = require('http')


let server = http.createServer((req, res) => {

  let url = req.url
  console.log(url)


 

  if(url === '/index' || url === '/'){
    fs.readFile(path.join(__dirname, "views", "index.html"), 'utf-8', (err, data) => {
      // console.log(data)
      res.end(data)
    })
  }
  if(url === '/about' || url === '/'){
    fs.readFile(path.join(__dirname, "views", "about.html"), 'utf-8', (err, data) => {
      // console.log(data)
      res.end(data)
    })
  }
  if(url === '/cart' || url === '/'){
    fs.readFile(path.join(__dirname, "views", "cart.html"), 'utf-8', (err, data) => {
      // console.log(data)
      res.end(data)
    })
  }
  if(url === '/services' || url === '/'){
    fs.readFile(path.join(__dirname, "views", "services.html"), 'utf-8', (err, data) => {
      // console.log(data)
      res.end(data)
    })
  }
})

server.listen(8000, (err)=>{
 err ? console.log(err) : console.log(`http://localhost:8000`)
})