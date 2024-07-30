/*
spread - extract and coppy
Applicable for arr and obj

*uses
1.create array and object
2.merge array and object
3.extending array and object
*/

// create a new array using spread
let ename = ['sr', 'yashin', 'muni','lokesh']
let new_ename = [...ename]

console.log(new_ename)

/*
use of spread operator 

create a new array
export an array elements and copy into new array
*/

// mearging two array using spread
let a = [10,20,30]
let b = [11,21,31]

let c = [...a, ...b]

console.log(c)

// mearging objects using spread

let obj1 = {
  name: "anurag",
  rollno: '13',
  school: 'abc'
}
let obj2 = {
  name: 'Arati',
  rollno: '14'
}
let obj = {
  name: 'Arati',
  rollno: '14'
}

let arrObj3 = [{...obj1}, {...obj2}]
console.log(arrObj3)

let obj4 ={...obj1, ...obj2, ...obj}
console.log(obj4)

// extending array using spread

let arr1 = [10, 20, 30]
let arr2 = [...arr1, 40, 50 ,60]

console.log('marging two arry',arr2)
