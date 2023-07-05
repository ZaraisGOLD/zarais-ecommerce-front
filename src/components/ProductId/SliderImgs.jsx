import React, { useState } from 'react'
import './styles/sliderImgs.css'

const SliderImgs = ({ product }) => {

  const [numberImg, setNumberImg] = useState(0)

  const objStyle = {
    transform: `translateX(calc(-${numberImg}/3 * 100%))`
  }

  const handlePrev = () => {
    if (numberImg - 1 < 0) {
      // setNumberImg(2)
    } else {
      setNumberImg(numberImg - 1)
    }
  }

  const handleNext = () => {
    if (numberImg + 1 > 2) {
      // setNumberImg(0)
    } else {
      setNumberImg(numberImg + 1)
    }
  }

  return (
    <div className='slider'>
      <div style={objStyle} className='slider__interior'>
        {
          product?.images.map(imgInfo => (
            <div className='slider__img--container' key={imgInfo.id} >
              <img className='slider__img' src={imgInfo.url} alt={product?.title} />
            </div>
          ))
        }
      </div>
      <div className='slider__btn--container'>
        <button className='slider__btn' onClick={handlePrev} >
          <i className='bx bx-chevron-left'></i>
        </button>
        <button className='slider__btn' onClick={handleNext}>
          <i className='bx bx-chevron-right'></i>
        </button>
      </div>
    </div>
  )
}

export default SliderImgs