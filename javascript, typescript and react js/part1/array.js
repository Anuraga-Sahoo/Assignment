let array = []
array[0] = "abd"
array[10] = "anurag"
array[21] = 12              
console.log(array[0])
console.log(array[5])
console.log(array[10])
console.log(array.length)


let value = array.filter((element)=>{
return element != undefined
})
let value2 = array.filter((element)=>{
  return element != null
  })

console.log(value)
console.log(value2)
 
// object

let obj = {
  name: "anurag",
  id: 1,
  x: "voi"
}
console.log(JSON.stringify(obj))
  console.log(10*false)
  console.log(10+undefined)
  console.log(10*undefined)
  console.log(10+null)
  console.log(10*null)
  console.log('2'*17)
  console.log(10*'2')
  console.log(10+'a')
  console.log(10*'a')


  let a = 10
  let b = '10'
  console.log(a==b)
  console.log(a===b)
