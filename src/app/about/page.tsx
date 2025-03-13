"use client"
import { Box, Container, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'
import FullscreenLoader from '../Components/FullscreenLoader/FullscreenLoader';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import { useParallaxEffect } from '../hooks/useParallex';
import page from '../page';
import Btn from '../Components/Btn/Btn';

const Page = () => {
  
  
  useParallaxEffect();
  const router = useRouter()
  return (


    <>
{/* <FullscreenLoader /> */}
     
    <Container className='auto ' sx={{pt:22}}>
                <Box className='auto center rounded' sx={{ width: '200px', height: '200px' }}>
                      <img src="https://wavescode8cdn.sirv.com/ane.jpg" alt="" className="img rounded cover" />
                    </Box>
    <Typography 
                className='center color2 auto flex items-center   justify-center align-center'
                sx={{
                  lineHeight:'1.35',
                  textAlign: {xs:'center',md:'left'},
                  fontSize:{xs:'2.55em',md:'2.95em',lg:'3.55em'},fontWeight:900}}>
                   About Me - Vito Medlej
                </Typography>
    </Container>

    <Box className='auto text-center ' sx={{maxWidth:'800px',pt:6}}>
 <Typography
    className='color2 fade-in-text'
    sx={{fontSize:'1em',px:1}}>
{
  `
 It all started when I was 9 years old, I stumbled upon Unity3d and immediately fell in love with the coding world.
 While I did not continue with game development, I found that web apps engineering is my favorite thing in the world. And I was certain, that's what I want to do for the rest of my life.
  `
}
    </Typography>

    <Typography
    className='color2 fade-in-text '
    sx={{fontSize:'1em',px:1,pt:1}}>
{
  `
 
  
  `
}


    </Typography>
    <Typography
    className='color2 fade-in-text '
    sx={{fontSize:'1em',px:1}}>
{
  `
    It wasn't so much about writting code, it was more about building and creating things that matter, then seeing people actually using it.

    That alone brings so much passion and fulfillment to me, more than anything else.
  
  `
}
    </Typography>

    <Typography
    className='color2 fade-in-text '
    sx={{fontSize:'1em',px:1,pt:1}}>
{
  `
   I turned my thoughts, from a deep burning desire to learn and teach myself all about it, to actually building +50 websites & web apps to awesome clients as of today. 
  `
}
    </Typography>

    <Typography
    className='color2 fade-in-text '
    sx={{fontSize:'1em',px:1,pt:1}}>
{
  `
    Being a self-taught developer is such a blessing but I'm also an MIS (Management Information Systems) student. This allowed me to help my clients in ways better than you can imagine.
   Such as understanding their business needs before their technical needs. And then code incredible useful software that actually helps.
   `
}
    </Typography>

    <Typography
    className='color2 fade-in-text '
    sx={{fontSize:'1em',px:1,pt:1}}>
{
  `
    What am I looking meanwhile is meaningful projects to work on, I don't really mind working with a company or a small team or even an individual. 
    
    As long we're building something of value and impact, I'm all here for it.   
`
}
    </Typography>
 
    </Box>

<ScrollToTop />

       

                    </>

  )
}

export default Page