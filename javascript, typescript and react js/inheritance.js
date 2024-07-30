class Parent {
  constructor(){
    console.log("I am a constructor")
  }
  m1(){
    console.log("i am m1 present in parent")
  }
  m2(){
    console.log("i am m2 present in parent")
  }
}
 class child extends Parent{
  constructor(){
    super()
    console.log("i am child class constructor")
  }
  m3(){
    console.log("i am m3 present in child")
  }
 }

 let c1 = new child()
//  c1.m1()
//  c1.m2()
//  c1.m3()

//  console.log(Parent)
//  console.log(child)
//  console.log(c1)
 
//  let element = new Parent()
//  element.m1()