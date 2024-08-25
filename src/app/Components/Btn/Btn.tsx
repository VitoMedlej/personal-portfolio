"use client"
import { Button } from '@mui/material'
import React from 'react'
import './Btn.css'


const Btn = ({children,sx,onClick} : any) => {
  return (
    <Button
    onClick={onClick}
    className='cursor pointer'
    sx={{
        // color:'white',
        zIndex:234,
        border:'1px solid #353639',
        borderRadius:'0px',
        ...sx
    }}>{children}</Button>
  )
}

export default Btn