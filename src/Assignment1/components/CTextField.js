import React from 'react'
import { TextField } from '@mui/material'
const CTextField = (props) => {
    
  return (
    <>
      
        <TextField
        type={props.type}
        value={props.value}
        variant={props.variant}
        name={props.name}
        label={props.lable}
        error={props.error}
        onChange={props.onChange}
        helperText={props.helperText}
        placeholder={props.placeholder}
        
        
        />
      
    </>
  )
}

export default CTextField