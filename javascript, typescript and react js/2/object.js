let user = {
  "id": 7,
  "first_name": "Letisha",
  "last_name": "Glashby",
  "email": "lglashby6@example.com",
  "gender": "Female",
  "ip_address": "19.127.220.234",
}


Object.keys(user).length ? console.log("element present") : console.log("empty")
console.log(Object.keys(user))
console.log(Object.values(user))

let key = Object.keys(user)
let value = Object.values(user)
console.log(key)
console.log(value, "hello")
// --------------------------------
let obj = {
  "keysOfUser" : Object.keys(user),
  "ValuesOfUser" :Object.values(user)

}
console.log(obj.keysOfUser)
console.log(obj.ValuesOfUser)
