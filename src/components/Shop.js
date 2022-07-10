import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import "./Shop.css";

const Shop = () => {
    const[products,setProduct] = useState([]);

    useEffect( ()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [])

  return (
    <div className="shop-container">
      <div className="product-container">
        <h3>Products </h3>
        {
            products.map(product=><Product product={product}/>)
        }
      </div>
      <div className="cart-container">
        <h3>Oder Summery</h3>
        <h5>Items Ordered: </h5>
      </div>
    </div>
  );
};

export default Shop;
