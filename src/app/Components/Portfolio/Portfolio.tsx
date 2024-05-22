"use client"
import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import ProjectSwiper from './ProjectSwiper'
import Btn2 from '../Btn/Btn2'
import Btn3 from '../Btn/Btn3'

const Portfolio = () => {
  return (
    <Grid id='portfolio' container className='flex  auto' sx={{
        zIndex:'10',
        // minHeight:'100vh',
        pb:4,
        pt:6,
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
{/* Crafted with Passion: My Projects */}
            My Latest Projects 
</Typography>
<Typography
className='white text-center w100'
sx={{fontWeight:200,fontSize:{xs:'.9em',sm:'.85em',md:'1em'}}}>

Below are my latest real-world projects delivered to actual businesses
          </Typography>
            </Box>
        <Box sx={{
            
            maxWidth:{sm:'95%',md:'95%',lg:'lg'}}}
             className='white auto center w100 justify-center h100 flex col'>
            <ProjectSwiper/>
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