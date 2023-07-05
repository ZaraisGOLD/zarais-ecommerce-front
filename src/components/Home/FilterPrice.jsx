import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/filterPrice.css'

const FilterPrice = ({ setFromTo, setOpenFilters }) => {

  const { register, handleSubmit, reset } = useForm()

  const submit = data => {
    setFromTo(data)
    reset({
      from : '',
      to: ''
    })
    setOpenFilters(false)
  }

  return (
    <article className='FilterPrice__content'>
      <h3 className='filterPrice__title'>Price</h3>
      <hr />
      <form className='filterPrice__form' onSubmit={handleSubmit(submit)} >
        <div className='form__input--from'>
          <label className='input__label' htmlFor="from">From</label>
          <input className='input__value' {...register('from')} type="number" id='from' placeholder='example: 9.999' />
        </div>
        <div className='form__input--to'>
          <label className='input__label' htmlFor="to">To</label>
          <input className='input__value' {...register('to')} type="number" id='to' placeholder='example: 9.999' />
        </div>
        <button className='firterPrice__form--btn'>Filter Price</button>
      </form>
    </article>
  )
}

export default FilterPrice