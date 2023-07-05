import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'
import './styles/similarProduct.css'

const SimilarProduct = ({ product }) => {

  const URL_BASE = import.meta.env.VITE_REACT_APP_URL
  const url = `${URL_BASE}/products?categoryId=${product?.categoryId}`

  const [filterProducts, getProductByCategory] = useFetch(url)

  useEffect(() => {
    if (product) {
      getProductByCategory()
    }
  }, [product])

  return (
    <section className='similarProduct__container'>
      <h2 className='similarProduct__title'>Discover Similar Products</h2>
      <div className='similarProduct__content'>
        {
          filterProducts?.map(prod => {
            if (prod.id !== product.id) {
              return (
                <CardProduct
                  key={prod.id}
                  product={prod}
                />)
            }
          })
        }
      </div>
    </section>
  )
}

export default SimilarProduct