"use client"
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import SMicons from '../SMicons/SMicons'
import { useRouter } from 'next/navigation'
import Btn from '../Btn/Btn'
import Link from 'next/link'

const Footer = () => {
  const router = useRouter()

  return (
    <footer style={{paddingTop:'6em'}} id='Contact' className='bg'>
          <Container sx={{maxWidth:'lg'}}>
              <Box className='flex row   items-center w100' sx={{pb:4}}>

              <Typography
              className='color2'
              sx={{pr:4,fontWeight:900,fontSize:{xs:'3em',md:'4em'}}}>
                LETS TALK
              </Typography>
              <a target='_blank' href='mailto:contact@vito-medlej.com'>
  <Btn sx={{ width: { xs: '140px', sm: 'auto' }, color: 'black' }}>
    Contact
    <Box sx={{ width: '30px', height: '30px' }}>
      <img src="https://cdn-icons-png.flaticon.com/128/16015/16015161.png" alt="" className="img contain" />
    </Box>
  </Btn>
</a>
              </Box>

          <Box
          sx={{pt:{xs:8,md:8},pb:4,borderTop:'1px solid gray'}}
          className='flex row wrap justify-between '>

              <Box 
                className='flex  justify-between '

                sx={{
                  flexDirection:{xs:'column',md:'row'},
                  width:{xs:'100%',md:'400px'}}}
              >

                    {[
                      {
                        title:'Home',
                        link:'/#hero',
                      },
                      {
                        title:'About',
                        link:'/about',
                      },
                      {
                        title:'Contact',
                        link:'/#contact',
                      },
                      {
                        title:'My Work',
                        link:'/work',
                      },
                    ].map(link=>{
                      return <Link
                      key={link.title}
                      className='color2 decor-none' href={link.link}>{link.title}</Link>
                    })}

              </Box>
                    <SMicons className=''  sx={{margin:{xs:'3em 0 0 0',md:'0'}}}/>
          </Box>
                    <Box sx={{py:4}}>
                      <Typography className='color3' sx={{color:'white'}}>
                      Vito Medlej ©2025. All rights reserved.
                      </Typography>
                    </Box>
          </Container>
    </footer>
  )
}

export default Footer