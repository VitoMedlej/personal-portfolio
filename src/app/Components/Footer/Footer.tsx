"use client"
import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w100'>
        <Container sx={{pb:4,pt:2}} className='center col auto w100 flex'>
                 
                    <Box sx={{my:2,gap:2}} className='flex row center'>
                        {

                            [
                                {
                                    img:`https://cdn-icons-png.flaticon.com/128/3670/3670274.png`
                                    ,href:``
                                },
                                {
                                    img:`https://cdn-icons-png.flaticon.com/128/2111/2111432.png`
                                    ,href:``
                                },
                                {
                                    img:`https://cdn-icons-png.flaticon.com/128/1384/1384014.png`
                                    ,href:``
                                },
                                {
                                    img:`https://cdn-icons-png.flaticon.com/128/6244/6244710.png`
                                    ,href:``
                                },
                                
                                {
                                    img:`https://cdn-icons-png.flaticon.com/128/909/909263.png`
                                    ,href:``
                                },
                                

                            ].map(link=>{
                                return <a key={link.img} href={``}>

                                <Box sx={{width:'30px'}}>
                                    <img src={link?.img} alt="" className="img invert" />
                                </Box>
                                </a> 
                            })
                        }
                        </Box> 
                          
        </Container>
        <Box className='w100'>
        <Divider sx={{background:"gray",width:'100%',opacity:0.5}}></Divider>
                        <Box sx={{py:2}} className='w100 flex justify-between items-center'>
                        <Box className=' ' sx={{width:'50px'}}>
                            <img
                            
                            src="https://cdn-icons-png.flaticon.com/128/6415/6415824.png"
                            
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