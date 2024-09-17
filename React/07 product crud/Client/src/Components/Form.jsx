import React, { useState } from 'react'

const Form = () => {
  const [products, setProducts] = useState({})
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(products)
  }

  let handleChange = (e) => {
     setProducts({...products, [e.target.name] : e.target.value})
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <legend>Add product</legend>
          <input type="text" name='name' onChange={handleChange} placeholder='Enter your name'/>
           <input type="number" name='price' onChange={handleChange} placeholder='enter price'/>
           <input type="text" name="image" onChange={handleChange} placeholder='enter image link'/>
           <input type="number" name='qty' onChange={handleChange} placeholder='enter Quantity'/>
           <input type="text" name="info" onChange={handleChange} placeholder='enter information about product'/>

           {/* <input type="submit" value="Submit" onClick={handleClick} /> */}
           <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
