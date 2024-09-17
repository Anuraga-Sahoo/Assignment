const fs = require('fs')

// Asynchronous
fs.readFile('one.txt', 'utf-8', (err, data)=>{
  console.log(data)

})
// // synchronous
let content = fs.readFileSync("one.txt", 'utf-8')
console.log(content, "synchronous")


 