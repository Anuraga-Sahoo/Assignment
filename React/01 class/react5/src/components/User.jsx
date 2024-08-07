import React from 'react'

const User = (props) => {
  return (
    <div>
      <pre>{JSON.stringify(props)}</pre>
      hello {props.name}{props.title} roll number is {props.roll}
    </div>
  )
}

export default User
