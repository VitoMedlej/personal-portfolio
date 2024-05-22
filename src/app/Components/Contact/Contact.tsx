"use client"
import { Grid, Box, Typography, Rating, TextField } from '@mui/material'
import React from 'react'
import Btn2 from '../Btn/Btn2'
import Btn3 from '../Btn/Btn3'



const Portfolio = () => {
  return (
    <Grid 
    id='Contact'
    container className='flex   auto' sx={{
        // zIndex:'10',
        backgroundImage:'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 43.55), #000 35%)',
        background:'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 33.55), #000 45%)',
        // background:'#090d22 !Important',
        pb:13,  
        pt:12,
        px:1,
      // backgroundImage:'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 43.55), #000 90%)',
        
        }}>
            <Box 
            className='auto col flex center'
            sx={{
              width:'100%',
                // minWidth:{xs:'80vw'}, 
                py:4}}>
            <Typography className='white text-center auto' sx={{pb:1,fontWeight:700,
              fontSize:{xs:'3em',sm:'3em',md:'4em'}}}>
                {/* Got something to tell me? */}
                  Get in touch
</Typography>
<Typography
className='white text-center w100'
sx={{fontWeight:200,fontSize:{xs:'.9em',sm:'.85em',md:'1em'}}}>

              Send me a message, I&apos;ll be sure to reply!
          </Typography>
            </Box>
        <Box sx={{
            
            maxWidth:{xs:'95%',sm:'sm',lg:'sm'}}}
             className='white auto center w100 justify-center h100 flex col'>
          

          <TextField
  variant='outlined'
  label='Full Name'
  placeholder='Full Name'
  name='fullName'
  sx={{
    color: 'black',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    '& .MuiFilledInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: 'white',
    },
  }}
/>

<TextField
  variant='outlined'
  label='Email Address'
  placeholder='Email Address'
  name='Email'
  
  type='email'
  sx={{
    my:2,
    color: 'white !important',

    backgroundColor: 'white',
    '&:hover': {


      backgroundColor: 'white',
    },
    '& .MuiFilledInput-underline:before': {
      borderBottomColor: 'white',
      color: 'white !important',


    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: 'white',
    color: 'white !important',

    },
  }}
/>

<TextField
  variant='outlined'
  label='Your Message'
  placeholder='Your Message'
  name='Message'
  type='text'
  rows={3}

  multiline
  sx={{
    color: 'white',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    '& .MuiFilledInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: 'white',
    },
  }}
/>
          

<Box sx={{
          pt:4,gap:2}} className='flex  w100 center items-center justify-center auto'>

        
        <Btn3 className='flex gap gap2 '
        
        styles={{background:'black',
        width:'200px',
        fontWeight:'500'}}>
        <>
        {`Send Message`}
       

        <img src="https://cdn-icons-png.flaticon.com/128/1933/1933005.png" style={{
          padding:1,
          filter:`invert(1)`,
          width:'20px',
          // background:'white',
        
      }} alt="" className="img" />
        </>

        </Btn3>
       
        </Box>
        <Box className="w100 auto center flex" sx={{pt:2}}>

        <a href='/' className='clr2' target='_blank'>
          Vito.medlej@gmail.com
        </a>
        </Box>

          </Box>
           
        </Grid>
  )
}

export default Portfolio