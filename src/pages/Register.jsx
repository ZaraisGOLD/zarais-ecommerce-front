import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaultRegisterValues from '../utils/defaultRegisterValues'
import './styles/register.css'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()

  const { createNewUser } = useAuthentication()

  const submit = data => {
    createNewUser(data)
    reset(defaultRegisterValues)
    navigate('/login')
  }

  return (
    <div className='register'>
      <form className='register__container' onSubmit={handleSubmit(submit)}>
        <h2 className='register__title'>Create account</h2>
        <div className='register__firstName'>
          <label className='register__label' htmlFor="firstName">First Name</label>
          <input className='register__input' {...register('firstName')} type="text" id='firstName' />
        </div>
        <div className='register__lastName'>
          <label className='register__label' htmlFor="lastName">Last Name</label>
          <input className='register__input' {...register('lastName')} type="text" id='lastName' />
        </div>
        <div className='register__email'>
          <label className='register__label' htmlFor="email">Email</label>
          <input className='register__input' {...register('email')} type="email" id='email' />
        </div>
        <div className='register__password'>
          <label className='register__label' htmlFor="password">Password</label>
          <input className='register__input' {...register('password')} type="password" id='password' />
          {/* <p className='login__req'><span>i</span>Password must be at least 6 characters.</p> */}
        </div>
        <div className='register__phone'>
          <label className='register__label' htmlFor="phone">Phone</label>
          <input className='register__input' {...register('phone')} type="tel" id='phone' />
        </div>
        <button className='register__btn'>Register</button>
        <div className='register__login'>
          <span className='register__span'>Already have an account?</span>
          <Link className='register__link' to='/login'><i className='bx bx-lock-open-alt' ></i>Sign in</Link>
        </div>
      </form>
    </div>
  )
}

export default Register