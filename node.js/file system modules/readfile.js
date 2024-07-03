 import { log } from 'console'
import fs from 'fs'
 import path from 'path'

 let file_name = path.join(process.cwd(),"in","bng","one" ,"emp1.txt")
// let file_name = path.join(process.cwd(), "readfile.js")

 console.log(file_name)

 fs.readFile(file_name, 'utf8', (err, data) => {
  if(err) throw err
  else{
    console.log(data)
  }
 })