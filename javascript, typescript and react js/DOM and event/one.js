// difference between function an d fat arrow 

// function add () {
//   console.log(this)
// }
// add()

// let add1 = ( ) => {
//   console.log(this)
// }
// add1()

function wish () {
 console.log("gm")
}
wish()
function wish(){
  console.log("ge")
}
wish()
function wish(){
  console.log("welcome")
}
// due to hosting concept the bellow function override the first funcction and it will print ge