import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from "axios";


const Home = () => {
  const [products, setProduct] = useState([]);

  let getProduct = async () => {
    const res = await axios.get("http://127.0.0.1:5000/api/products");
    console.log(res);
    setProduct(res.data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="flex">
      {/* Product crud operation */}
      {products.map((product) => {
        return <ProductCard key={product._id} data={product} />
        
      
        // console.log(product)
        
      })}
      {/* <Link to="/form" >Form</Link> */}
    </div>
  )
}

export default Home
