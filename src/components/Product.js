import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

export const Product = (props) => {
    const {name,img,seller,price,stock,star} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

  return (
    <div className='product-style'>
        <img src={img} alt="" />
        <div>
        <h4 className='product-name-style'>{name}</h4>
        <p>{seller}</p>
        <p>Price: {price}</p>
        <p>only {stock} left in stock</p>
        <Rating initialRating={star}/>
          
        <br/>
        <button onClick={() =>props.handleAddCart(props.product)} className='btn-regular'>
       {cartIcon} Add to Cart</button>
        </div>
    </div>
  )
}
