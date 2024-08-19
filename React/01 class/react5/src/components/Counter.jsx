// class component

// import { isDisabled } from "@testing-library/user-event/dist/utils";
// import { Component } from "react";

// class Counter extends Component{

//   state = {
//     value: 0
//   }

//   increase = () => {
//     this.setState({value: this.state.value + 1})
//   }
//   decrease = () => {
//     this.setState({value: this.state.value - 1})
//     if(this.state.value === 0) {
//       this.setState({value: 0}) 
//       console.log("running", this.state.value)
//     }
//   }

//   render(){
//   return(
//     <>
//     <h2>Value is {this.state.value}</h2>
//     <button onClick={this.increase}>Counter +</button>
//     <button onClick={this.decrease}>Counter -</button>

//     </>
//   )
// }
// }

// export default Counter


// functional component

import React, { useState } from "react"

const Counter = () => {
 const [number, setNumber] =useState({number1 : 0, number2 : 10})

 let increase = () => {
  setNumber({number2 : number.number2+ 1})
 }

 let decrease = () => {
  setNumber({number2 : number.number2 - 1})
 }
  return(
    <>
    <h1> value is {number.number2}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    </>
  )
} 

export default Counter