"use client"
import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import Btn2 from '../Btn/Btn2'
import Btn from '../Btn/Btn'
import Btn3 from '../Btn/Btn3'
import ReviewSection from '../Reviews/ReviewSection'
import { testimonials } from '../Testimonials/Testimonials'

const Hero = () => {
  return (
    <Container className='center  items-center flex col align-center ' sx={{
      position: `sticky`,
      top: 0,
      py:6,minHeight:'100vh'}}>
        
      <ReviewSection data={
        
        testimonials.slice(0,3)
      
      
      }/>

        <Typography sx={{
        maxWidth:'800px',
        pt:{xs:6,sm:6,md:6},
        fontSize:{xs:'2.1em',sm:'3em',md:'3em',lg:'3.5em'},fontWeight:'600'}} 
        component='h1'
        className='white  center auto text-center'>
          {/* I build Web & Mobile apps that give your business an unfair advantage */}
        Web & Mobile apps for an unfair business advantage
          {/* Give your business an unfair advantage */}
        </Typography>
        <Typography sx={{maxWidth:'650px',
        py:2,
        fontSize:{xs:'.95em',sm:'1em',md:'1em',lg:'1.15em'},fontWeight:'100'}} 
        component='p'
        className='white center auto text-center'>
          {/* The #1 place to learn profitable skills like finding clients, automating your business, creating recurring revenue and more! */}
          {/* I build complex web & mobile apps that empower businesses  */}
          {
            `Your go-to developer for creating incredibly powerful fullstack applications.`
          }
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
          <span style={{fontWeight:700,color:'#ebebeb'}}>

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