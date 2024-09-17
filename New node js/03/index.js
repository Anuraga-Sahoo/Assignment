const fs = require('fs')
const datafile = require('./data.json')
// const { json } = require('stream/consumers')

let maleUser = []
let femaleUser = []
let otherUser = []


fs.readFile('data2.json', 'utf-8', (err, data) => {
  if (err) throw err
  console.log(data)
  let users = JSON.parse(data)

  //condition
  for(let user of users){
    if(user.gender === 'Female'){

      // let femaleData = JSON.stringify(user)
      femaleUser.push(user)

      fs.writeFile('Female.json', JSON.stringify(femaleUser), err => {
        if(err) console.log(err)
      } )

    }
    else if(user.gender === 'Male'){

      // let maleData = JSON.stringify(user)
      maleUser.push(user)

      fs.writeFile('male.json', JSON.stringify(maleUser), err => {
        if(err) console.log(err)
      } )

    }
    else {
      // let other = JSON.stringify(user)
      otherUser.push(user)
      fs.writeFile('other.json', JSON.stringify(otherUser), err => {
        if(err) console.log(err)
      } )
    }
  }

})