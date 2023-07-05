import React from 'react'
import './styles/productPurchase.css'

export const ProductPurchase = ({ prodPurchased }) => {
  console.log(prodPurchased);

  return (
    <article className='productPurchase__container'>
      <div className='productPurchase__content'>
        <div className='productPurchase__imgContainer'>
          <img className='productPurchase__img' src={prodPurchased.product?.productImgs[0].url} alt="" />
        </div>
        <h3 className='productPurchase__productName'>{prodPurchased.product.title}</h3>
        <div className='productPurchase__data'>
          <h3 className='productPurchase__quantity'>{prodPurchased.quantity}</h3>
          <h3 className='productPurchase__price'>$ {prodPurchased.quantity * prodPurchased.product.price}</h3>
        </div>
      </div>
    </article>
  )
}
