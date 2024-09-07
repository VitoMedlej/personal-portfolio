"use client"
import React, { useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Btn from '../Btn/Btn';
import gsap from 'gsap';


const items = [
  {
    id: 1,
    title:'Amaria Beauty',
    url :'https://amaria.beauty',
    img: 'https://ucarecdn.com/292b15a7-c922-44b1-8a5e-5056bd02f71c/brownminimalistnewcollectionsportwearinstagrampost.png',
    sx: {
      height: { xs: '300px',sm:'400px', md: '715px' },
      gridColumn: { xs: '1 / -1', md: '1 / 2' }, // Span full width on mobile, first column on desktop
      gridRow: { md: '1 / 3' }, // Span two rows on desktop
    },
  },
  {
    id: 2,
    img: 'https://miller.bslthemes.com/pixy-demo/img/works/1/1.jpg',
    sx: {
      height: { xs: '200px',sm:'400px', md: '350px' },
      gridColumn: { xs: '1 / -1', md: '2 / 3' }, // Full width on mobile, second column on desktop
      gridRow: { md: '1 / 2' }, // First row on desktop
    },
  },
  {
    id: 3,
    img: 'https://miller.bslthemes.com/pixy-demo/img/works/1/1.jpg',
    sx: {
      height: { xs: '300px',sm:'400px', md: '350px' },
      gridColumn: { xs: '1 / -1', md: '2 / 3' }, // Full width on mobile, second column on desktop
      gridRow: { md: '2 / 3' }, // Second row on desktop
    },
  },
  {
    id: 4,
    img: 'https://miller.bslthemes.com/pixy-demo/img/works/1/1.jpg',
    sx: {
      height: { xs: '200px',sm:'400px', md: '350px' },
      gridColumn: { xs: '1 / -1', md: '1 / 2' }, // Full width on mobile, first column on desktop
      gridRow: { md: '3 / 4' }, // Third row on desktop
    },
  },
  {
    id: 5,
    img: 'https://miller.bslthemes.com/pixy-demo/img/works/1/1.jpg',
    sx: {
      height: { xs: '300px',sm:'400px', md: '715px' },
      gridColumn: { xs: '1 / -1', md: '2 / 3' }, // Full width on mobile, second column on desktop
      gridRow: { md: '3 / 5' }, // Span two rows on desktop
    },
  },
  {
    id: 6,
    img: 'https://miller.bslthemes.com/pixy-demo/img/works/1/1.jpg',
    sx: {
      height: { xs: '200px',sm:'400px', md: '350px' },
      gridColumn: { xs: '1 / -1', md: '1 / 2' }, // Full width on mobile, first column on desktop
      gridRow: { md: '4 / 5' }, // Fourth row on desktop
    },
  },
  {
    id: 7,
    img: 'https://miller.bslthemes.com/pixy-demo/img/works/1/1.jpg',
    sx: {
      height: { xs: '300px',sm:'400px', md: '350px' },
      gridColumn: { xs: '1 / -1', md: '1 / 2' }, // Full width on mobile, first column on desktop
      gridRow: { md: '5 / 6' }, // Fifth row on desktop
    },
  },
  {
    id: 8,
    img: 'https://miller.bslthemes.com/pixy-demo/img/works/1/1.jpg',
    sx: {
      height: { xs: '200px',sm:'400px', md: '350px' },
      gridColumn: { xs: '1 / -1', md: '2 / 3' }, // Full width on mobile, second column on desktop
      gridRow: { md: '5 / 6' }, // Fifth row on desktop
    },
  },
];

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
              My Project Name Here
            </Typography>
            <Box>
              <Btn sx={{ width: { xs: '140px', sm: 'auto' }, color: 'black' }}>
                View Site
                <Box sx={{ width: '30px', height: '30px' }}>
                  <img src="https://cdn-icons-png.flaticon.com/128/16015/16015161.png" alt="" className="img contain" />
                </Box>
              </Btn>
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