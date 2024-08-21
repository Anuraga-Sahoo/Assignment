import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios, { Axios } from 'axios'

function App() {
  const [user, setUser] = useState([])
  let getUser = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      // console.log(response)
      // console.log(response.data)
      setUser(response.data)
      console.log(user)
    })   
    .catch((err)=> console.log(err))
    
  }

  return (
    <> 
     <h2>User component</h2>
     <button onClick={getUser}>GET User</button>
     <pre>{JSON.stringify(user)}
     { console.log(user.length)}</pre>
       {user.length ? <> data = {user.length} </> : <>No data present</> }
    </>
  )
}

export default App
