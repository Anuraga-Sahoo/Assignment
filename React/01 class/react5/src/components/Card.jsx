 import React, { Component, useState } from 'react'
 
 export class Card extends Component {

  state = {
    msg : "Hello ...."
  }
  
   btnHandleGm = () => {
    //  setMsg("GM")
    // console.log("GM")
    // this.msg = "GM"
    this.setState({msg: "Good night"})
    }
    btnHandleGn = () => {
      //  setMsg("GM")
    //   console.log("GN")
    //  this.msg = "GN"
    this.setState({msg: "Good morning"})

      }
    render() {
    // const [msg, setMsg] = useState("")
     return (

       <>
         <h3>Message component</h3>
         <hr />
         <h5>Wish message {this.state.msg }</h5>
         <button onClick={this.btnHandleGm}>GM</button>
         <button onClick={this.btnHandleGn}>GN</button>
       </>
     )
   }
 }
 
 export default Card
 