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
Few Of My Master piece Work

</Typography>
<Typography
className='white text-center w100'
sx={{fontWeight:200,fontSize:{xs:'.9em',sm:'.85em',md:'1em'}}}>

I am Kilian, a passionate freelancer from Hamburg
          </Typography>
            </Box>
        <Box sx={{
            
            maxWidth:{sm:'100%',md:'95%',lg:'lg'},gap:{xs:1.5,sm:1}}}
             className='white auto  w100  justify-between h100 flex row wrap'>
        
            <PricingCard sx={{width:{xs:'100%',md:'39%'}}}/>
            <PricingCard sx={{mt:{xs:1.5,sm:2,md:0},width:{xs:'100%',md:'59%'}}}/>
            <PricingCard sx={{mt:{xs:1.5,sm:1,md:1},width:{xs:'100%',md:'100%'}}}/>
        
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