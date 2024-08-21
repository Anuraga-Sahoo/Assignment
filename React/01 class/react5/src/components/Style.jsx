import React from 'react'

const Style = () => {
// internal css
  let color_blue = {color : "blue", backgroundColor: "black"}
  return (
    <div>
      <h1 style={color_blue}>Hello 1</h1>
      <h1 style={{color: "red", backgroundColor : "green"}}>Hello 2</h1>
      <h1>hello 3</h1>
    </div>
  )
}

export default Style
