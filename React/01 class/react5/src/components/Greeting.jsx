import React, { Component } from 'react'

export class Greeting extends Component {
   state = {
     msg : "Hello ......."
   }

   btnGm = () => {
    this.setState({msg: "Good Morning"})
   }
   btnGn = () =>{
    this.setState({msg: "Good night"})
   }

  render() {
    return (
      <>
        <h1>{this.state.msg}</h1>
        <button onClick={this.btnGm}>GM button</button>
        <button onClick={this.btnGn}>Gn button</button>

      </>
    )
  }
}

export default Greeting
