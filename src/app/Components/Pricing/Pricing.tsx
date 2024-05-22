"use client"
import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import Btn2 from '../Btn/Btn2'
import Btn3 from '../Btn/Btn3'
import PricingCard from './PricingCard'

const Portfolio = () => {
  return (
    <Grid container className='flex  auto' sx={{
        zIndex:'10',
        // minHeight:'100vh',
        py:12,
        px:1,
        background:'black'
        
        }}>
            <Box 
            className='auto col flex center'
            sx={{
              width:'100%',
                // minWidth:{xs:'80vw'}, 
                py:4}}>
            <Typography className='white text-center auto' sx={{pb:1,fontWeight:700,
              fontSize:{xs:'3em',sm:'3em',md:'4em'}}}>
My Creative Software Solution Suite

</Typography>
<Typography
className='white text-center w100'
sx={{fontWeight:200,fontSize:{xs:'.9em',sm:'.85em',md:'1em'}}}>


You're a click away from turning your concept to code. Your vision is expertly engineered.

          </Typography>
            </Box>
        <Box sx={{
            
            maxWidth:{sm:'100%',md:'95%',lg:'lg'},gap:{xs:1.5,sm:1}}}
             className='white auto  w100  justify-between h100 flex row wrap'>
            
            <PricingCard 
            miniTitle={'Business Website'}
            title={'300-1500$'}
            perks={[
              `Exclusive & unique custom design of your choice`,
              `Super-fast site performance`,
              `.com Domain + Free Hosting Forever`,
              `SEO-optimized`,
              `Elegant animations that suit the design`,
              `Full backend solution included`,
              `24/7 support and maintenance, never breaks down`,
              {optional: true, text: `Multi language support `},
              {optional: true, text: `Additional Pages`},
              {optional: true, text: `Google Analytics`},
            ]}
            sx={{width:{xs:'100%',md:'39%'}}}/>


            <PricingCard

text={`
`}
             miniTitle={'Ecommerce Solution'}
             title={'500-5000$'}
             perks={[
              "Strong UI/UX that displays brand identity",
              "Trust & Security Features",
              "Easy-to-scale & highly reliable code",
              "Intelligent searchability and navigation systems",
              "SEO-optimized for search engines",
              "Full mobile responsiveness & optimizations",
              "Fast loading speed on mobile and desktop",
              "24/7 support and maintenance, never breaks unexpectedly",
              "Fast and secure database setup + backup",
              "Global payment gateway",
              {optional: true, text: "Multi-language support"},
              {optional: true, text: "Additional Pages"},
              {optional: true, text: "Google Analytics"},
            ]}
            
            sx={{mt:{xs:1.5,sm:2,md:0},width:{xs:'100%',md:'59%'}}}/>
            <PricingCard
                text={`Looking for something else? A system for your business? A mobile app? Worry not, 
                      Let us discuss further based on the scale of your vision!
                `}
                 miniTitle={'Custom Applications'}
                 title={'Individual Price'}
                 perks={[
                  "Strong UI/UX that displays brand identity",
                  "Trust & Security Features",
                  "Easy-to-scale & highly reliable code",
                  // "Intelligent searchability and navigation systems",
                  "SEO-optimized for search engines (if applicable)",
                  "Full mobile responsiveness & optimizations",

                  "Fast loading speed on mobile and desktop",
                  "24/7 support and maintenance, never breaks unexpectedly",
                  "Fast and secure database setup + backup",
                  // "Global payment gateway",
                  // {optional: true, text: "Multi-language support"},
                  {optional: true, text: "Additional Pages (if applicable)"},
                  {optional: true, text: "Google Analytics (if applicable)"},
                ]}
            
            sx={{mt:{xs:1.5,sm:1,md:1},width:{xs:'100%',md:'100%'}}}/>
        
          </Box>

          <Box sx={{
          pt:4,gap:2}} className='flex  w100 center items-center justify-center auto'>

        
        <Btn3 className='flex gap gap2 '
        
        styles={{background:'black',
        
        fontWeight:'300'}}>
        <>
        {`View More`}
       

        <img src="https://cdn-icons-png.flaticon.com/128/2722/2722998.png" style={{
          padding:1,
          filter:`invert(1)`,
          width:'20px',
          // background:'white',
          borderRadius:'50%',
        
      }} alt="" className="img" />
        </>

        </Btn3>
       
        </Box>
        </Grid>
  )
}

export default Portfolio