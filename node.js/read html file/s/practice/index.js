const fs = require('fs')


fs.readFile("users.json", 'utf8', (err , data) => {
  if (err) throw err
  let users = JSON.parse(data)
  let male_user = []
  let female_user = []
    for (user of users){
         if(user.gender === "Female") female_user.push(user)
        else  male_user.push(user)
    }


fs.writeFile("female.json", JSON.stringify(female_user), (err) => {
  if(err) throw err
  console.log("female.json file created success fully")
})

fs.writeFile("male.json", JSON.stringify(male_user), (err) => {
  if(err) throw err
  console.log("male.json file created success fully")
})
})