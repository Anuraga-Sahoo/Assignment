// fat arrow function

function add(){
  console.log("adition")
}
add()

let add2 = function(){
  console.log("object")
}
add2()

let add3 = () =>{
  console.log(
    "add 3"
  )
}
add3()

let add4 = (...numbers) => {
  // number.reduce((acu, current)=>{ return acu + current})a
  return numbers.reduce((acc, num) => acc + num, 0)
}
let b = add4(10,20,20,40)
console.log(b)


