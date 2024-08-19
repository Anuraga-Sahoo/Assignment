import React from 'react'
import ComB from './ComB'

const ComA = (props) => {
  let eloc = {
    loc: ["odisha", "bhubaneswar",
      "karnataka", "bengaluru "
    ]
  }

  return (
    <div>
      <h2>Component A</h2>
      <h3>
  {JSON.stringify(props)}

      </h3>
      <hr />
      <ComB location={eloc}/>
    </div>
  )
}

export default ComA
