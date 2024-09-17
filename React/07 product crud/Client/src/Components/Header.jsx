import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="links bg-zinc-800 h-[3rem] p-5 text-white mb-3">
        <NavLink to='/' className='m-3'>Home</NavLink>
        <NavLink to='/addProduct' >AddProduct</NavLink>
      </div>
    </div>
  )
}

export default Header
