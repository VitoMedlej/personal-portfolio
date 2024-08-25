"use client"
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const FullscreenCover = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [disappear, setDisappear] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      document.body.classList.remove('no-scroll');
    }, 900); // Adjust duration to ensure animation plays out

    const fadeOutTimer = setTimeout(() => {
      setDisappear(true)
      document.body.classList.remove('no-scroll');
    }, 1500); // Fade out duration + a small buffer

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimer);
    };
  }, []);


      
  return (
  
    <Box
    sx={{top:0,right:0,width:'100vw',
    zIndex:124124124124, 
    position:'fixed',
    transition: 'opacity 0.7s ease',
    opacity: fadeOut ? 0 : 1,
    display:disappear ? 'none !important' : 'flex',
    height:'100vh'}}
    className="fullscreen-cover bg    items-center"
    >
     <Typography sx={{color:'black',gap:1}}>
  <span className="word" >Guiding</span>
  <span className="word" >Towards</span>
  <span className="word" >Greatness</span>
</Typography>
    </Box>
  )
}

export default FullscreenCover