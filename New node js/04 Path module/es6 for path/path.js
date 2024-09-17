import path from "path";
import { cwd } from "process";

let cwdir =  path.join(cwd()) // current working directory

let cwdfile = path.join(cwd(), "path.js") // construct a file path

console.log(cwdir)
console.log(cwdfile)

// Assignment

import fs from 'fs'

fs.readFile(path.join(cwd(), "data.json"), "utf-8", (err, data) => {
  if(err) throw err

  let users = JSON.parse(data)

  let male_users = users.filter((user) => {
    return user.gender === 'Male'
  })

  let female_users = users.filter((user)=>{
    return user.gender === 'Female'
  })

  fs.writeFile(path.join(cwd(), 'static','male', 'male.json' ), JSON.stringify(male_users), err  => {
    if(err) throw err
    else console.log("male file create successfully")
    
  })
  fs.writeFile(path.join(cwd(), 'static','female', 'female.json' ), JSON.stringify(female_users), err  => {
    if(err) throw err
    else console.log("female file create successfully")
  })
})
