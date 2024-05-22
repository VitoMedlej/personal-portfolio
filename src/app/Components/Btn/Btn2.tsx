"use client"
import React from 'react'
import './Btn.css'
import { Button, Typography } from '@mui/material'

const Btn2 = ({children,className,styles,onClick}:{onClick?:any,children:any,className?:string,styles:any}) => {
  return (
    
    
    <a 
    onClick={onClick}
    // href={'href'} 
    style={{...styles}}
    className={`btn btn-1  text-center justify-center center flex items-center ${className}`}>
    <svg>
      <rect x="0" y="0" fill="none" width="100%" height="100%"/>
    </svg>
        {children}
  </a>
  )
}

export default Btn2