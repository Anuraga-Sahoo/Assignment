const fs = require('fs')
// const {json} = require('stream/consumers')
fs.readFile("data.json", "utf8", (err, data) => {
  if(err) throw err
  console.log(typeof data)
  let users = JSON.parse(data)
  console.log(typeof users);
  for(user of users){
    console.log(user.id)
  }
})