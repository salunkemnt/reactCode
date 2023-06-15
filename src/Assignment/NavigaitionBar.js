import React from 'react'
import { Link } from 'react-router-dom'
const NavigaitionBar = () => {
  return (
    <div className='nav'>
      <Link to='/'> Home</Link>
      {/* <Link to='/Assignment1'> Assignment1</Link> */}
      <Link to='/Assignment3'> Assignment1</Link>
      <Link to='/Assignment2'> Assignment2</Link>
     
    </div>
  )
}

export default NavigaitionBar
