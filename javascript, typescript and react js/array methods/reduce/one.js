let numbers = [10,20,30,40]

let sum = numbers.reduce((a,b) => {
 console.log(a,b)
 return a + b
})

console.log(sum)