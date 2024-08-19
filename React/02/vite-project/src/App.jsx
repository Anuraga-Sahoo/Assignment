import { useState } from 'react'
import './App.css'
import Message from './component/Message'

function App() {
  const [msg, setMsg] = useState("Hello")

  let updateHandler = (message) => {
     setMsg(message)
  }

  return (
   <>
     <h2>{msg}</h2>
     <button onClick={() => updateHandler("good morning")}>Gm</button>
     <button onClick={() => updateHandler("Good Afternoon")}>GA</button>
     <button onClick={() => updateHandler("Good Evening")}>GE</button>
     <button onClick={() => updateHandler("Good Neight")}>GN</button>

     <Message/>

   </>
  )
}

export default App
