"use client"
import { Box, Container, Divider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Btn2 from '../Btn/Btn2'
import Btn from '../Btn/Btn'
import Btn3 from '../Btn/Btn3'
import ReviewSection from '../Reviews/ReviewSection'
import { testimonials } from '../Testimonials/Testimonials'
import SMicons from '../SMicons/SMicons'
import {gsap} from 'gsap';


const Hero = () => {

  useEffect(() => {
      
    gsap.to('.hero', {  y: 0, duration: .5, 
        ease: "none",
      delay: 0.25});

    gsap.to('.hero', { opacity: 1, delay:.3, duration: 1, 
      ease: "none",
    });
      // gsap.to('.main-logo', {
      //   scale: 1.2,
      //   repeat: -1,
        
      //   yoyo: true,
      //   duration: 1,
      //   ease: "ease"
      // });
  document.body.classList.remove('no-scroll'); 

  // document.body.classList.add('no-scroll');

    }, []);
  return (
    <Container className='center hero items-center flex col align-center ' sx={{
      position: `sticky`,
      top: 0,
      py:6,minHeight:'100vh'}}>
        
      <ReviewSection data={
        
        testimonials.slice(0,3)
      
      
      }/>

        <Typography sx={{
        maxWidth:'800px',
        pt:{xs:6,sm:6,md:6},
        fontSize:{xs:'2.6em',sm:'3em',md:'3em',lg:'3.5em'},fontWeight:'800'}} 
        component='h1'
        className='white  center auto text-center'>
          {/* I build Web & Mobile apps that give your business an unfair advantage */}
        {/* Web & Mobile apps for an unfair business advantage */}
          Give your business an unfair advantage
        </Typography>
        <Typography sx={{maxWidth:'650px',
        py:2,
        fontSize:{xs:'.95em',sm:'1em',md:'1em',lg:'1.15em'},fontWeight:'100'}} 
        component='p'
        className='white center auto text-center'>
          {/* The #1 place to learn profitable skills like finding clients, automating your business, creating recurring revenue and more! */}
          {/* I build complex web & mobile apps that empower businesses  */}
          {
            `Hello friend! My name is Vito Medlej, and I build incredibly powerful Web & Mobile applications.`
            // `Your go-to developer for creating incredibly powerful Web & Mobile applications.`
          }
        </Typography>

        <Box sx={{
          pt:4,gap:2}} className='flex  w100 center items-center justify-center auto'>

        
        <Btn2
        onClick={(e : any)=>{
          e.preventDefault();
          gsap.to(window, {duration:1.5, scrollTo: "#portfolio"});

        }}
        className='flex gap gap2 bg3'
        
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

          +28
          {' '}
          </span>
          <span className='white'>

           Happy Clients
          </span>
          </Typography>
        </Box>
      
        {/* <Btn3>View Work</Btn3> */}
    </Container>
  )
}

export default Hero