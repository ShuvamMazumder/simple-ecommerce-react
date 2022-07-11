import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { Product } from "./Product";
import { addToDb } from "../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setDisplayProducts(data);
      });
  }, []);

  const handleAddCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchProducts = products.filter((product) =>
      product.name.includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchProducts);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Product"
          onChange={handleSearch}
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          <h3>Products </h3>
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddCart={handleAddCart}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
    </>
  );
};

export default Shop;
