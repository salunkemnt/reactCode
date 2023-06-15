import React from 'react'
import {Button} from '@mui/material'
const CButton = (props) => {
    const{variant, onClick,type,  children, color}=props;
  return (
    <div>
      <Button onClick={onClick} variant={variant} type={type} color={color}>{children}</Button>
      
    </div>
  )
}

export default CButton