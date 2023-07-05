import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/ProductId/ProductIdInfo'
import SliderImgs from '../components/ProductId/SliderImgs'
import SimilarProduct from '../components/ProductId/SimilarProduct'
import './styles/productId.css'

const ProductId = () => {

  const { id } = useParams()

  const URL_BASE = import.meta.env.VITE_REACT_APP_URL
  const url = `${URL_BASE}/products/${id}`

  const [product, getProductById] = useFetch(url)

  useEffect(() => {
    getProductById()
  }, [id])


  return (
    <article className='productId__container'>
      <div className='productId__content'>
        <SliderImgs product={product} />
        <ProductIdInfo product={product} />
      </div>
      <SimilarProduct product={product} />
    </article>
  )
}

export default ProductId