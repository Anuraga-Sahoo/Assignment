import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './components/Message'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {

  return (
    <>
    <Provider store={store}>

    <Message/>

    </Provider>
    </>
  )
}

export default App
