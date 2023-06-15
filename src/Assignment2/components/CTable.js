import React from 'react'
import { Table } from '@mui/material'
const CTable = (props) => {
  const{children}=props
  return (
    <div>
      <Table>
        {children}
      </Table>
    </div>
  )
}

export default CTable
