import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import purchase_book from './bookaction';
function BookContainer() {
    const noofbook = useSelector(state=> state.NumberofBook)
    const dispatch = useDispatch()
  return (
    <>
    <div>
      BookContainer
    </div>
    <h2>No Of Book ={noofbook}</h2>
    <button onClick={()=>(dispatch(purchase_book()))}>Buy Book</button>
    </> 
  )
}

export default BookContainer
