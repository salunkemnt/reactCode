import React from 'react'
import { TextField } from '@mui/material'
const CTextField = (props) => {
    
  return (
    <>
      
        <TextField
        type={props.type}
        defaultValue={props.Normal}
        value={props.value}
        variant={props.variant}
        label={props.lable}
        onChange={props.onChange}>

        </TextField>
    </>
  )
}

export default CTextField


