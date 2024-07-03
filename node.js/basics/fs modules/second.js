// const fs = require('fs')
import { log } from "console";
import fs from "fs"
import { rename , appendFile} from 'node:fs';

// fs.writeFile("message.txt", "oyee abd cjfr efho jdjvhf ", (err) => {
//   if(err) throw err;
//   else console.log("the file has been saved");
// })
// rename("message1.txt", "rename.txt" , (err) => {
//   if(err) throw err
//   else console.log("file name is changed");
// })
// appendFile("message1.txt"," append this line second time", (err) =>{
//   if(err) throw err
//   else console.log("file is append second time");
// } )
fs.readFile("package.json" , "utf8", (err, data) => {
  if(err) throw err
  else console.log(data);
})
