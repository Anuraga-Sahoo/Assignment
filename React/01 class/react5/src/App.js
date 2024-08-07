import React from "react";
import Navbar from "./components/Navbar";
import Message from "./components/Message";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import User from "./components/User";
import Users from "./components/Users";

class App extends React.Component{
  render(){
    return<>
      <Navbar/>
      <User name= "Anuraga" title="Sahoo" roll={13}/>
      <Slider/>
      <h2>App- component</h2>
      <h3>Article part</h3>
      <Message/>
      <Footer/>
      <Users idname="13" name = "Anuraga Sahoo"/>
    </>
  }
}

export default App