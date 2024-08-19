import React from 'react'

const Cart = (props) => {
  return (
    <React.Fragment>
      <h2>cart Component</h2>
      <pre>{JSON.stringify(props)}</pre>
      <h3>Product Name : {props.pname}</h3>
      <h3>Product Id : {props.pid}</h3>
      <h3>Product price : {props.pPrice}</h3>
      {/* <h3>Product image : {props.image}</h3> */}
      <img src={props.image} alt="image" />
      <img src={props.Product.img} alt="immage" />

    </React.Fragment>
  )
}

export default Cart
