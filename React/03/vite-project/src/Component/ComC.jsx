import React from 'react'

const ComC = (props) => {
  return (
    <div>
      <h2>Component C</h2>
      {JSON.stringify(props)}
      <h3>hello := {props.location.loc[3]}</h3>
    </div>
  )
}

export default ComC