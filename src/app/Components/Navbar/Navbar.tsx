"use client"
import { Box, Container } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import Btn2 from '../Btn/Btn2'

const Navbar = () => {
  return (
    <Container className={`flex fixed center c50 between row justify-between items-center ${false ? 'bg' : ''}`} sx={{
      
      maxWidth:{xs:'100%',md:'1200px'},
      
      // border:'1px solid white',
    mt:2,
    py:1,
    borderRadius:"900px"}}>
        <Box sx={{width:'40px'}}>
          <img src="https://cdn-icons-png.flaticon.com/128/7039/7039130.png" alt="" className="img invert" />
        </Box>

        <Box className='cent' sx={{height:'50px'}}>
          <img  src="https://cdn-icons-png.flaticon.com/128/6415/6415824.png" alt="" className="img invert" />
        </Box>

        <Box>
          <Btn>Hit me up</Btn>
        </Box>
    </Container>
  )
}

export default Navbar