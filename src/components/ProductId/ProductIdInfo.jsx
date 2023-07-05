import React, { useState } from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import './styles/productIdInfo.css'
import { useNavigate } from 'react-router-dom'

const ProductIdInfo = ({ product }) => {

  const [quantity, setQuantity] = useState(1)
  const { addProductToCart } = useCrudCart()

  const handlePlus = () => setQuantity(quantity + 1)

  const token = localStorage.getItem('token')

  const navigate = useNavigate()

  const handleMinus = () => {
    if (quantity - 1 >= 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = () => {
    if(token){
      const data = {
        quantity,
        productId: product.id
      }
      addProductToCart(data)
    }else{
      navigate('/login')
    }
  }

  return (
    <section className='productIdInfo__container'>
      <section className='productIdInfo__name'>
        <span className='productIdInfo__name--brand'>{product?.brand}</span>
        <h3 className='productIdInfo__name--title'>{product?.title}</h3>
      </section>
      <section className='productIdInfo__body--container'>
        <section className='productIdInfo__body--content'>
          <div className='productIdInfo__priceAndQuantity--container'>
            <div className='productIdInfo__price'>
              <span className='price__label'>Price</span>
              <h4 className='price__value'>$ {product?.price}</h4>
            </div>
            <div className='productIdInfo__quantity'>
              <span className='quantity__label'>Quantity</span>
              <div className='quantity__counter'>
                <button className='counter__btn--minus' onClick={handleMinus}>
                <i className='bx bx-minus'></i>
                </button>
                <button className='counter__value'>{quantity}</button>
                <button className='counter__btn--plus' onClick={handlePlus}>
                <i className='bx bx-plus'></i>
                </button>
              </div>
            </div>
          </div>
          <button className='productIdInfo__btn--addToCart' onClick={handleAddToCart}>
            Add to cart <i  className='bx bx-cart btn__icon--cart'></i>
          </button>
        </section>
        <p className='productIdinfo__body--description'>{product?.description}</p>
      </section>
    </section>
  )
}

export default ProductIdInfo