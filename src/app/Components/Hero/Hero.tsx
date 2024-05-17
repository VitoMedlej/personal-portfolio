"use client"
import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import Btn2 from '../Btn/Btn2'
import Btn from '../Btn/Btn'
import Btn3 from '../Btn/Btn3'
import ReviewSection from '../Reviews/ReviewSection'

const Hero = () => {
  return (
    <Container className='center  items-center flex col align-center ' sx={{
      position: `sticky`,
      top: 0,
      py:4,minHeight:'100vh'}}>
      <ReviewSection data={[{title:'"$20,000 using the resources from Pait Pro. 🤑"'},
      
      
      {title:"I'm charging 3X more for my websites! 🥳"},{title:"Helped me close 5 clients in the last month!"}]}/>

        <Typography sx={{
        maxWidth:'800px',
        pt:{xs:6,sm:6},
        fontSize:{xs:'2.1em',sm:'3em',md:'3em',lg:'3.5em'},fontWeight:'600'}} 
        component='h1'
        className='white  center auto text-center'>
          Give your design business an unfair advantage
        </Typography>


        <Typography sx={{maxWidth:'650px',
        py:2,
        fontSize:{xs:'.95em',sm:'1em',md:'1em',lg:'1.15em'},fontWeight:'100'}} 
        component='p'
        className='white center auto text-center'>
          The #1 place to learn profitable skills like finding clients, automating your business, creating recurring revenue and more!
        </Typography>

        <Box sx={{
          pt:4,gap:2}} className='flex  w100 center items-center justify-center auto'>

        
        <Btn2 className='flex gap gap2 bg3'
        
        styles={{background:'black',fontWeight:'300'}}>
        <>
        {`View Work `}
       

        <img src="https://cdn-icons-png.flaticon.com/128/1549/1549454.png" style={{
          padding:1,
          filter:`invert(1)`,
          width:'20px',
          // background:'white',
          borderRadius:'50%',
        
      }} alt="" className="img" />
        </>

        </Btn2>
          <Typography className='white' sx={{fontWeight:200,fontSize:'1.15em'}}>
          <span style={{fontWeight:700,color:'#550df4'}}>

          +40
          {' '}
          </span>
          <span className='white'>

           Projects
          </span>
          </Typography>
        </Box>
        {/* <Btn3>View Work</Btn3> */}
    </Container>
  )
}

export default Hero