import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { Product } from "./Product";
import "./Shop.css";

const Shop = () => {
    const[products,setProduct] = useState([]);
    const[cart,setCart] = useState([]);

    useEffect( ()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [])

  const handleAddCart =(product) =>{
    const newCart = [...cart,product]
    setCart (newCart);
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        <h3>Products </h3>
        {
            products.map(product=><Product 
            key={product.key}
            product={product}
            handleAddCart = {handleAddCart}
            />)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
