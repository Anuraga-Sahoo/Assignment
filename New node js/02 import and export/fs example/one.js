const fs = require('fs')

fs.readFile('notes.txt', 'utf-8', (err, data) => {
  if(data){

    fs.writeFile('copy0.txt',data, (err) => {
      if(err){
        console.log(err)
      }else{
        console.log("file created successfully")
      }
    })
  }
  else{
    console.log("no data found in this file", "error : " ,err)
  }
  
})