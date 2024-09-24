import bcrypt from 'bcrypt'

let user = {
  "username" : "Anuraga",
  "cc" : "78489456785",
  "password" : "Anurag@12345"
}

// let salt = bcrypt.genSaltSync(10)
// let newCc = bcrypt.hashSync(user.cc, salt)
// console.log(newCc)

// let newPass = bcrypt.hashSync(user.password, salt)
// console.log(newPass)

// let flag = bcrypt.compareSync("Anurag@12345", newPass)

// if(flag){
//   console.log("login success")
// }else{
//   console.log("login failed")
// }

 bcrypt.hash(user.password, 10, (err, hash) => {
  if(err) throw err
  // Object.defineProperty(user, "password", {value: hash})
  user.password = hash    
  console.log(user)
})

bcrypt.compare("Anurag@1234", '$2b$10$xE1FLUjt.XFi2LhffsYKrOr4YVzdQRYjZOKYD74VBN8SoSS2rR9r6' ,(err, resul) => {
   console.log(resul)
})

