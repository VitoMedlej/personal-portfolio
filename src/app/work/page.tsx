"use client"
import React from 'react'
import GridProjects from '../Components/GridProjects/GridProjects'
import { Box, Container, Typography } from '@mui/material'
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'
import Btn from '../Components/Btn/Btn'
import CTA from '../Components/CTA/CTA'
import { useParallaxEffect } from '../hooks/useParallex'

const page = () => {
    useParallaxEffect();
  
    return (
    <>
<ScrollToTop />
    
        <Container maxWidth='lg' sx={{pb:4,pt:18}}>
            <Box sx={{pb:4,gap:1}}>

                <Typography sx={{fontWeight:700,fontSize:{xs:'2em',md:'3em'}}}>
                    {`A glimpse of the work I've been doing for the past few years.`}
                </Typography>
                <Typography sx={{py:.5,fontWeight:500,fontSize:'.8em'}}>
                    {`Out of 100+ github repositories, here are my favorite projects.`}
                </Typography>
                
                <a target='_blank' href={`https://github.com/VitoMedlej/`}>
              <Btn sx={{ mt:2,width: { xs: '140px', sm: 'auto' }, color: 'black' }}>
                Github
                <Box sx={{ width: '30px', height: '30px' }}>
                  <img src="https://cdn-icons-png.flaticon.com/128/16015/16015161.png" alt="" className="img contain" />
                </Box>
              </Btn>
              </a>
              </Box>

        </Container>
        <Container>

    <GridProjects/>


        </Container>
    <CTA/>
    </>
  )
}

export default page