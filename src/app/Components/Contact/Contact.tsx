"use client"
import { Grid, Box, Typography, Rating, TextField } from '@mui/material'
import React, { useState } from 'react'
import Btn2 from '../Btn/Btn2'
import Btn3 from '../Btn/Btn3'



const Portfolio = () => {
  const [info,setInfo] = useState({Fname:'',email:'',message:''})
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitMessage = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({message:info}),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (e : any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Grid 
    id='Contact'
    container className='flex   auto' sx={{
        // zIndex:'10',
        backgroundImage:'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 43.55), #000 35%)',
         background : {xs:
          'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 33.55), #000 45%)',
xl:'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 33.55), #000 35%)',


        },
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
  name='Fname'
 
value={info.Fname}
onChange={handleInputChange}
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
name='email'
value={info.email}
onChange={handleInputChange}
  variant='outlined'
  label='Email Address'
  placeholder='Email Address'
  
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
name='message'
value={info.message}
onChange={handleInputChange}
  variant='outlined'
  label='Your Message'
  placeholder='Your Message'

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

        
        <Btn3 
           onClick={(e : any)=>{
            e.preventDefault();
            submitMessage()
          }}
        className='flex gap gap2 '
        
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

        <a href='mailto:contact@vito-medlej.com' className='clr2' target='_blank'>
          Contact@vito-medlej.com
        </a>
        </Box>

          </Box>
           
        </Grid>
  )
}

export default Portfolio