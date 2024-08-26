"use client";
import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { useFullscreen, useLoadState } from '@/app/hooks/ContextWrapper';
import { useRouter } from 'next/navigation';

const Starter = () => {
  const { isfullscreen, setFullScreen } = useFullscreen();
  const {isLoaded} = useLoadState()

  useEffect(() => {
    const handleFullScreenChange = () => {
      setFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
  }, [setFullScreen]);

  const handleFullScreen = () => {
    const container = document.getElementById('fullscreen-container');
    setFullScreen(true);

    if (container && !document.fullscreenElement) {
      container.requestFullscreen().then(() => {
        document.querySelector('canvas')?.requestPointerLock();
      }).catch((err) => console.error(err));
    } else {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };
  const router = useRouter();

  return (
    <Box className='main-title' 
      sx={{ display: isfullscreen ? 'none' : 'block' }}>
        <Box sx={{display:'flex', alignItems:{xs:"center",sm:'top'} ,
        height:'100%'
        ,flexDirection:'column', maxWidth:'400px',margin:'0 auto'}}>

      <Typography component={'h1'} sx={{ fontSize: '1.75em', pt: 8, fontWeight: 600 }}>
        Hello Stranger! Welcome to my portfolio.
      </Typography>
      <Typography sx={{ fontSize: '1.05em', pt: 2, fontWeight: 400 }}>
              If regular websites are too boring for you, perhaps a 3D website might interest you? 
      </Typography>
      <Typography sx={{ fontSize: '1.05em', pt: 1, fontWeight: 400 }}>
        Would love to hear your thoughts, reach out at: contact@vito-medlej.com or if you have any questions!
      </Typography>
    {  <Button
    disabled={!isLoaded}
        onClick={handleFullScreen}
        sx={{ py:2,fontWeight:600,width: '90%', 
        fontStyle: 'italic', 
        ':hover': { color: 'black', border: '1px solid black' }, 
        background: 'black', color: 'white', mt: {xs:2,sm:4} }}>
        DIVE RIGHT IN!
      </Button>}

      {  <Button
  
        onClick={()=>router.push('/')}
        sx={{ py:1,fontWeight:600,width: '90%', 
       border: '1px solid black',
        ':hover': { color: 'black', border: '1px solid black' }, 
        background: 'white', color: 'black', mt: {xs:2,sm:2} }}>
        View in 2D
      </Button>}
      </Box>

    </Box>
  );
};

export default Starter;
