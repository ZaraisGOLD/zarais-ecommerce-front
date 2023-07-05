import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllProductsThunk } from '../../store/slices/products-slice'
import { useDispatch } from 'react-redux'
import './styles/filterCategory.css'


const FilterCategory = ({ setOpenFilters }) => {

  const URL_BASE = import.meta.env.VITE_REACT_APP_URL

  const url = `${URL_BASE}/categories`

  const [categories, getCategories] = useFetch(url)

  const dispatch = useDispatch()

  useEffect(() => {
    getCategories()
  }, [])

  const handleCategories = id => {
    const url = `${URL_BASE}/products?categoryId=${id}`
    dispatch(getAllProductsThunk(url))
    setOpenFilters(false)
  }

  const handleAllProducts = () => {
    dispatch(getAllProductsThunk())
    setOpenFilters(false)
  }

  return (
    <article className='filterCategory__content'>
      <h3 className='filterCategory__title'>Category</h3>
      <hr />
      <section className='filterCategory__list--content'>
        <ul className='filterCategory__list'>
          <li className='list__allProducts' onClick={handleAllProducts} >All products</li>
          {
            categories?.map(category => (
              <li className='list__options' onClick={() => handleCategories(category.id)} key={category.id}>
                {category.name}
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default FilterCategory