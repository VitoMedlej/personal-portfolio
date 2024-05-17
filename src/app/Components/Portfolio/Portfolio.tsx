"use client"
import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import ProjectSwiper from './ProjectSwiper'

const Portfolio = () => {
  return (
    <Grid container className='flex  auto' sx={{
        zIndex:'10',
        // minHeight:'100vh',
        py:14,
        px:1,
        background:'black'
        
        }}>
            <Box sx={{
                minWidth:{xs:'80vw'}, 
                py:4}}>
            <Typography className='white' sx={{fontWeight:700,fontSize:{xs:'3em',sm:'2.5em',md:'3em'},pb:.42}}>
Few of my masterpiece work

</Typography>
      
            </Box>
        <Box sx={{
            
            maxWidth:{sm:'95%',md:'95%',lg:'lg'}}}
             className='white auto center w100 justify-center h100 flex col'>
            <ProjectSwiper/>
          </Box>
        </Grid>
  )
}

export default Portfolio