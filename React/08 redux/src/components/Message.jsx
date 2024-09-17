import React from 'react'
import { gmAction, gnAction } from '../redux/Messages/message.action'
import { useDispatch, useSelector } from 'react-redux'
import { messageReducer } from '../redux/Messages/message.reducer'

const Message = () => {


  let dispatch = useDispatch()
  let message = useSelector((state) => {
    return state
  })

  let gmHandler = () => {
    dispatch(gmAction())
  }
  let gnHandler = () => {
    dispatch(gnAction())
  }
  return (
    <div>
      <h2>Message component</h2>
      {/* <h3>{JSON.stringify(message)}</h3> */}
      <h3>{message.msg}</h3>

      <button onClick={gmHandler}>GM</button>
      <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message
