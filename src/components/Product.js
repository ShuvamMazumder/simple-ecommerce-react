import React from 'react'
import './Product.css'

export const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;


  return (
    <div className='product-style'>
        <img src={img} alt="" />
        <div>
        <h4 className='product-name-style'>{name}</h4>
        <p>{seller}</p>
        <p>Price: {price}</p>
        <p>only {stock} left in stock</p>
        </div>
    </div>
  )
}
