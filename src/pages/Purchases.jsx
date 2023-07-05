import React, { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import { ProductPurchase } from '../components/Purchases/ProductPurchase'
import './styles/purchases.css'
import { useNavigate } from 'react-router-dom'

const Purchases = () => {

  const { purchases, getPurchased } = usePurchases()

  const token = localStorage.getItem('token')

  const navigate = useNavigate()

  useEffect(() => {
    getPurchased()
  }, [])

  if(token){
    return (
      <article className='purchases__container'>
          <h2 className='purchases__title'>Purchases</h2>
          {
            purchases?.map(prodPurchased => (
              <ProductPurchase
                key={prodPurchased.id}
                prodPurchased={prodPurchased}
              />
            ))
          }
      </article>
    )
  }else{
    useEffect(() => {
      navigate('/login')
    }, [])
  }
}

export default Purchases