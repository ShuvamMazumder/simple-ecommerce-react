import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

export const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

  return (
    <div className='product-style'>
        <img src={img} alt="" />
        <div>
        <h4 className='product-name-style'>{name}</h4>
        <p>{seller}</p>
        <p>Price: {price}</p>
        <p>only {stock} left in stock</p>
        <button onClick={props.handleAddCart} className='btn-regular'>
       {cartIcon} Add to Cart</button>
        </div>
    </div>
  )
}
