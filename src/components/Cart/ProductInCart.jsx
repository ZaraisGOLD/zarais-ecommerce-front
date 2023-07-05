import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import './styles/productInCart.css'

const ProductInCart = ({ prodCart }) => {

  const { deleteProductFromCart } = useCrudCart()

  const handleDeleteCart = () => {
    deleteProductFromCart(prodCart.id)
  }

  return (
    <article className='prodcart'>
      <header className='prodcart__header' >
        <img className='prodcart__img' src={prodCart?.product?.productImgs[0]?.url} alt={prodCart?.product.title} />
      </header>
      <h3 className='prodcart__title' >{prodCart.product.title}</h3>
      <button className='prodcart__delete--icon' onClick={handleDeleteCart} >
        <i className='bx bx-trash'></i>
      </button>
      <footer className='prodcart__footer'>
        <span className='prodcart__quantity'>{prodCart.quantity} </span>
      <div className='prodcart__subtotal'>
        <span className='prodcart__subtotal--label'>Subtotal:</span>
        <span className='prodcart__subtotal--value'>{prodCart.product.price} </span>
      </div>
      </footer>
    </article>
  )
}

export default ProductInCart