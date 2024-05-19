"use client"
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import Btn2 from '../Btn/Btn2'
import Btn3 from '../Btn/Btn3'

const Navbar = () => {
  return (
    <Container
    
    className={`flex absolute center c50 between row justify-between items-center ${false ? 'bg' : ''}`} 
    sx={{
      
      maxWidth:{xs:'100%',md:'1200px'},
      zIndex:12467,
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
        <Btn className="" sx={{
            ':hover':{color:'red !Important'},
            gap: 1, px:2 }}>
            <Typography sx={{
                
                fontSize: '.7em' }}>
              Hit me up
            </Typography>
            <Box sx={{ width: '20px', height: '20px' }} className="invert">
              <img src="https://cdn-icons-png.flaticon.com/128/9314/9314363.png" alt="" className="img" />
            </Box>
          </Btn>
        </Box>
    </Container>
  )
}

export default Navbar