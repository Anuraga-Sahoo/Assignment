import React, { useState, useEffect } from "react";
import axios from "axios";
const AddProduct = () => {
  const [products, setProducts] = useState({});
  const [getProduct, setGetProduct] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(products);
    addProduct(products);
  };

  let handleChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  const addProduct = async (products) => {
    const res = await axios.post(
      "http://127.0.0.1:5000/api/products",
      products
    );
    console.log(res.data);
  };

  const getProductDetails = async () => {
    const res = await axios.get("http://127.0.0.1:5000/api/products");
    setGetProduct(res.data);
  };
  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    <>
    <div className="flex justify-center items-center text-white flex-col">
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-zinc-800 flex flex-col gap-2 p-5 rounded-md h-[20rem] w-[20rem]"
      >
        <legend>Add product</legend>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter your name"
          className="text-black rounded-md h-9 p-3"
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="enter price"
          className="text-black rounded-md h-9 p-3"
        />
        <input
          type="text"
          name="image"
          onChange={handleChange}
          placeholder="enter image link"
          className="text-black rounded-md h-9 p-3"
        />
        <input
          type="number"
          name="qty"
          onChange={handleChange}
          placeholder="enter Quantity"
          className="text-black rounded-md h-9 p-3"
        />
        <input
          type="text"
          name="info"
          onChange={handleChange}
          placeholder="enter information about product"
          className="text-black rounded-md h-9 p-3"
        />

        {/* <input type="submit" value="Submit" onClick={handleClick} /> */}
        <button className="bg-blue-500 rounded-md w-[5rem] h-[3rem]">
          Submit
        </button>
      </form>
    </div>

    <div>


      <table className="text-black w-[45rem]" >
        <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>image</th>
          <th></th>
        </tr>
        </thead>
       <tbody>

        {
          getProduct.map((product)=>{
            return(
              <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td><img src={product.image} alt="" className="h-9 w-9"/></td>
              <td><button className="bg-blue-500 rounded-md h-full w-10 p-1">Edit</button> <button className="bg-red-500 rounded-md h-full w-15 p-1">Delete</button></td>
            </tr>
            )
          })
        }
        
        </tbody>
      </table>
        </div>
        </>
  );
};

export default AddProduct;
