"use client"
import { Button } from '@mui/material'
import React from 'react'
import './Btn.css'


const Btn = ({children} : any) => {
  return (
    <Button sx={{
        color:'white',
        border:'1px solid white',
        borderRadius:'900px',
    }}>{children}</Button>
  )
}

export default Btn