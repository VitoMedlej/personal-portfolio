"use client"
import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import SMicons from '../SMicons/SMicons'
import { useRouter } from 'next/navigation'

const Footer = () => {
  const router = useRouter()

  return (
    <footer className='w100'>
        <Container sx={{pb:4,pt:2}} className='center col auto w100 flex'>
                 
                   <SMicons/>
                          
        </Container>
        <Box className='w100'>
        <Divider sx={{background:"gray",width:'100%',opacity:0.5}}></Divider>
                        <Box sx={{py:2}} className='w100 flex justify-between items-center'>
                        <Box
        onClick={()=>router.push('/')}
                        
                        className=' ' sx={{width:'100px'}}>
                            <img
                            
                            src="https://ucarecdn.com/882f100e-18b8-451c-9c53-5f75cd0c7a47/vm.png"
                            
                            alt="" className="img invert" />                        
                    </Box> 
                                <Typography className='white'>
                                    Hello@vitomedlej.com
                                </Typography>
                        </Box>
        </Box>
    </footer>
  )
}

export default Footer