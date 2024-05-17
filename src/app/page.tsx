"use client"

import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Btn2 from './Components/Btn/Btn2'
import Hero from './Components/Hero/Hero'
import ReviewSection from './Components/Reviews/ReviewSection'
import Portfolio from './Components/Portfolio/Portfolio'

const Index = () => {
  let [gradientStop,setGradientStop] = useState(63)
  let handleMouseMove = (event : any) => {
    let gradientStop = 70 + (event.clientX + event.clientY) / (window.innerWidth + window.innerHeight) * 30;
    setGradientStop(Number(gradientStop.toFixed(2)))
  }


  return (
    <Box
    onMouseMove={handleMouseMove}
    className='trans1 col flex ' sx={{

      backgroundImage:'radial-gradient(circle at 50% -23%, rgba(17, 24, 65, 43.55), #000 65%)',
      // backgroundImage: `radial-gradient(circle at 50% -1%, rgba(30, 4, 88, .55), #000 7%)`
      // background: 'rgb(6,6,74)',
      // background: `radial-gradient(circle, rgba(6,6,74,1) 0%, rgba(0,0,47,1) ${gradientStop}%, rgba(0,0,57,1) 100%)`
    }}>
          <Hero/>

        <Divider sx={{border:'1px solid #ffffff0a'}} className='w100 white'></Divider>


    <Grid container className='flex  auto' sx={{
      zIndex:'10',
      // minHeight:'100vh',
      // height:'1500px',

      background:'black'
      
      }}>
        <Grid item xs={12} md={6}>

        <Box 
        sx={{
          py:{xs:0,sm:0},
          height:'100%',
          // width:{xs:'90%',sm:'48%'}
        }}
          >
      <img 
      src='https://assets-global.website-files.com/62d88eed5c7a8f350b8f904b/65ff94e16aa0de9555e24a90_Group%201057-p-800.png'
      // src="https://ucarecdn.com/9da2ff49-00f9-49b5-ae97-737b37046d0b/ane1edited.jpg"
      alt="" className="img contain" />
        </Box>
      </Grid>
      <Grid sx={{px:1}} item xs={12} md={5.5} >

        <Box sx={{maxWidth:{sm:'90%',md:'95%',lg:'600px'}}} className='white auto center  justify-center h100 flex col'>
<Typography sx={{fontWeight:700,fontSize:{xs:'3em',sm:'2.5em',md:'3em'},pb:.42}}>
Problem solver

</Typography>
          <Typography sx={{fontWeight:200,fontSize:{xs:'.9em',sm:'.85em',md:'1em'}}}>

I am Kilian, a passionate freelancer from Hamburg, Germany and the founder of LOKKEE STUDIOS, bringing you web development and design from the future. My expertise is developing next-level websites and web applications including full frontend design.
          </Typography>
        </Box>
      </Grid>
    </Grid>

{/* <hr /> */}
    <Portfolio/>
    </Box>
  )
}

export default Index