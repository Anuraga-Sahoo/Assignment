import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState({email:"", password:"", mobile:'', date: ""})

  // let emailHanndler = (e) => {
  //   setUser({...user, email: e.target.value})
  // }
  // let passwordHandler = (e) => {
  //   setUser({...user, password: e.target.value})
  // }

  let submitHandler = (e) => {
    e.preventDefault()
    console.log(user)
  }

  let updateHandler = (e) => {
    // if(e.target.name === "email") setUser({...user, email:e.target.value})
    // else setUser({...user, password: e.target.value})
    setUser({...user, [e.target.name] : e.target.value})
  }


  return (
    <>
    <div className="heading flex justify-center items-center flex-col ">
      <div className="main">

      <h2 >Registration Page</h2>
      </div>
    
   <div className='bg-zinc-800 w-full h-[100vh] flex justify-center items-center flex-col'>
    {/* <h1 className='text-white '>My user email is {user.email}</h1>
    <h1 className='text-white'>My user email is {user.password}</h1> */}
    <form action="" onSubmit={submitHandler} className='h-full w-full flex flex-col justify-center '>
      {/* <label htmlFor="" className='text-white m-5'>Email</label> */}
      <input type="email" name="email" id="email" placeholder='Enter Email' onChange={updateHandler}  className='w-[20rem] h-[2.5rem] ml-[1.5rem] pl-4 mt-3'/>

      {/* <label htmlFor="" className='text-white m-5'>Password</label> */}
      <input type="password" name="password" id="password" placeholder='Enter Password'onChange={updateHandler}  className='w-[20rem] h-[2.5rem] mt-3 ml-[1.5rem] pl-4'/>
      <input type="number" name="mobile" id="mobile" placeholder='Enter Mobile Number'onChange={updateHandler}  className='w-[20rem] h-[2.5rem] mt-3 ml-[1.5rem] pl-4'/>
      
      <input type="date" name="date" id="date" placeholder='DOB'onChange={updateHandler}  className='w-[20rem] h-[2.5rem] mt-3 ml-[1.5rem] pl-4' />
      

      <input type="submit" value="Login" className='text-white m-5 bg-blue-400 p-3 rounded-md w-[10rem]' />
    </form>


   </div>
   </div>
    </>
  )
}

export default App
