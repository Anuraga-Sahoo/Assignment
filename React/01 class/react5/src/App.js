import React from "react";
import Navbar from "./components/Navbar";
import Message from "./components/Message";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

class App extends React.Component{
  render(){
    return<>
      <Navbar/>
      <Slider/>
      <h2>App- component</h2>
      <h3>Article part</h3>
      <Message/>
      <Footer/>
    </>
  }
}

export default App