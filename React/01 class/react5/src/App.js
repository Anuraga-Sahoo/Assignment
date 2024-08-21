import React from "react";
import Navbar from "./components/Navbar";
import Message from "./components/Message";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import User from "./components/User";
import Users from "./components/Users";
import Product from "./components/Product"
import Card from "./components/Card";
import { Greeting } from "./components/Greeting.jsx";
import Counter from "./components/Counter";
import Style from "./components/Style.jsx";

class App extends React.Component{
  render(){
    return<>
      {/* <Navbar/>
      <User name= "Anuraga" title="Sahoo" roll={{first:13, second:14, class:15}}/>
      <Slider/>
      <h2>App- component</h2>
      <h3>Article part</h3>
      <Message/>
      <Footer/>
      <Users idname="13" name = "Anuraga Sahoo"/> */}
      {/* <Product/> */}
      {/* <Card/> */}
      {/* <Greeting/>
      <Counter/> */}
      <Style/>
    </>
  }
}

export default App