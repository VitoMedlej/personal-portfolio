"use client"
import React, { useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Btn from '../Btn/Btn';
import gsap from 'gsap';
import { items } from '../../../../items';




const YourComponent = () => {

  useEffect(() => {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
      const target = item.querySelector('.project-name-box');

      item.addEventListener('mouseenter', () => {
        gsap.to(target, { opacity: 1, y: 0, duration: 0.25, ease: 'none' });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(target, { opacity: 0, y: 40, duration: 0.25, ease: 'none' });
      });
    });
  }, []);

  return (
    <Grid
    id='portfolio'
      container
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gridAutoRows: { xs: 'auto', md: '350px' }, // Sets default row height on desktop
        gap: '16px',
      }}
    >
      {items.map((item) => (
        <Grid
          className="grid-item relative"
          key={item.id}
          item
          sx={item.sx}
        >
          <Box className='project-name-box flex items-center row absolute space-between' 
            sx={{ 
              width: '-webkit-fill-available', 
              px: 2, 
              zIndex: 12, 
              py: 3, 
              bottom: 0, 
              background: 'white',
              opacity: 0, // Hidden by default
              transform: 'translateY(40px)', // Start hidden below
            }}>
            <Typography sx={{ color: 'black', fontWeight: 700, fontSize: {sm:'1.57em'} }}>
             {item.title}
            </Typography>
            <Box sx={{gap:.5}} className='flex '>
            
              <a  href={`/work/${item.title}`}>
              <Btn sx={{ gap:.25, width: { xs: '140px', sm: 'auto' }, color: 'black' }}>
                Case Study
                <Box sx={{ width: '20px', height: '30px' }}>
                  <img src="https://cdn-icons-png.flaticon.com/128/1654/1654190.png" alt="" className="img contain" />
                </Box>
              </Btn>
              </a>
              <a target='_blank' href={`${item.url}`}>
              <Btn sx={{ width: { xs: '140px', sm: 'auto' }, color: 'black' }}>
                View
                <Box sx={{ width: '30px', height: '30px' }}>
                  <img src="https://cdn-icons-png.flaticon.com/128/16015/16015161.png" alt="" className="img contain" />
                </Box>
              </Btn>
              </a>
            </Box>
          </Box>
          <Box className="image-container" sx={{ overflow: 'hidden', height: '100%' }}>
            <img
              src={item.img}
              alt=""
              className="img parallax-image"
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default YourComponent;