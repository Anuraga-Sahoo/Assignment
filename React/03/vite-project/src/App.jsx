import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComA from './Component/ComA'
import List from './Component/List'

function App() {
   let emp = {name: 'Anurag', id: 1}
  return (
   <>
   {/* <ComA empData = {emp}/> */}
   <List/>
   </>
  )
}

export default App
