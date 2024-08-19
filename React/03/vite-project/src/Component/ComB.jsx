import React from 'react'
import ComC from './ComC'

const ComB = (props) => {
  return (
    <div>
      <h2>Component B</h2>
       <h3>{JSON.stringify(props)}</h3>
       <hr />
       <h3> hello " " {props.location.loc[0]}</h3>
       <ComC location = {props.location}/>
    </div>
  )
}

export default ComB
