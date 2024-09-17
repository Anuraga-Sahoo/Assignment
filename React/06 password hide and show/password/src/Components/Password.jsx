import React, { useState } from 'react'
import { IoEye } from "react-icons/io5"
import { IoEyeOff } from "react-icons/io5";;

const Password = () => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  
  let click = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div>
      <input type={showPassword ? "password" : "text"} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={click}>{showPassword ? <IoEye /> : <IoEyeOff />}</button>
    </div>
  )
}

export default Password
