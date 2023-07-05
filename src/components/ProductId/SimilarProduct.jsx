import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'
import './styles/similarProduct.css'

const SimilarProduct = ({ product }) => {

  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`

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