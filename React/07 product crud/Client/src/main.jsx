import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  BrowserRouter as Router,
  Form,
} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './Components/Home.jsx';
import AddProduct from './Components/AddProduct.jsx';
// import Form from './Components/Form.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>} />
      
      <Route path="addProduct" element={<AddProduct/>} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
