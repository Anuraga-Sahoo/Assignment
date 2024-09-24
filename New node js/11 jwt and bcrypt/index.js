import jwt from 'jsonwebtoken'

let user_payload = {
  "username" : "Anuraga",
  "password" : "Anurag@12345"
}

let token = jwt.sign(user_payload, "hdfei")
console.log(token)

let user_Data = jwt.verify(token, "hdfei")
console.log(user_Data)