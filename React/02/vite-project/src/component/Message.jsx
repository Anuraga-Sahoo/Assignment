// import React, { Component } from 'react'

// export class Message extends Component {

//   state = {
//     msg: "Hello"
//   }

//   update = (value) => {
//     this.setState({msg: value})
//   }
  
//   render() {
//     return (
//       <div>
//         <h2> using Bind method</h2>
//          <h3>{this.state.msg}</h3>
//          <button onClick={this.update.bind(this, "Good Morning")}>GM</button>
//          <button onClick={this.update.bind(this, "Good night")}>GN</button>
//          <button onClick={this.update.bind(this, "Good Afternoon")}>GA</button>
//          <button onClick={this.update.bind(this, "Good evening")}>GE</button>
//       </div>
//     )
//   }
// }

// export default Message
import React, { useState } from 'react'

function Message() {
  const [msg, setMsg] = useState("Hello")

  let update = (value) => {
    console.log(value)
     setMsg(value)

  }
  return (
    <div>
       <h2> using Bind method</h2>
        <h3>{msg}</h3>
        <button onClick={update.bind(null, "Good Morning")}>GM</button>
        <button onClick={update.bind(null, "Good night")}>GN</button>
        <button onClick={update.bind(null, "Good Afternoon")}>GA</button>
        <button onClick={update.bind(this,  "Good evening")}>GE</button>
        <button onClick={() => setMsg("message")}>abcd</button>
    </div>
  )
}

export default Message
