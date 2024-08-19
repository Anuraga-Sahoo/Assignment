import React, { Fragment } from "react";
import Cart from "./Cart";

class Product extends React.Component{
  constructor(props){
    super(props)
    this.product = {pid:10, pname:'iphone', price:5000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixcmQsARbTtwpySN--xqSmWg_p2yTCYv80A&s'}
  }
  render(){
    return<Fragment>
       <h2>Product Component</h2>
       <Cart pname={this.product.pname} pid={this.product.pid} pPrice = {this.product.price} image = {this.product.img} Product={this.product}/>
    </Fragment>
  }
}

export default Product