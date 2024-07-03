import fs from "fs"
import path from "path"

let file_name = path.join(process.cwd(), "in", "bng", "one", 'emp1.txt')

fs.readFile(file_name, 'utf8', (err, data) => {
  if(err) throw err
  else console.log(data)

  // setInterval(()=>{
    fs.appendFile(file_name, "data", (err, data) => {
      if(err) throw err 
      else console.log("data changed successfully")
    } )
    // clearInterval()
  // }, 5000)
  
})