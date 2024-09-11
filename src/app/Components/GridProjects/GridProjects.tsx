"use client"
import React, { useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Btn from '../Btn/Btn';
import gsap from 'gsap';


const items = [
  {
    id: 1,
    title:'Ova Skin Care',
    url :'https://ovaskincare.net',
    img: 'https://ucarecdn.com/035a14e6-eac1-4cbc-9a16-7f8ba4c2a3e8/brownbeautyskincareinstagrampost31.png',
    sx: {
      height: { xs: '400px',sm:'400px', md: '715px' },
      gridColumn: { xs: '1 / -1', md: '2 / 3' }, // Full width on mobile, second column on desktop
      gridRow: { md: '3 / 5' }, // Span two rows on desktop
    },
  },
 
  {
    id: 2,
    title:'Bee-Organic',
    url :'https://beeorganic-lb.com/',
    img: 'https://ucarecdn.com/22a8219e-26e4-425a-bbd9-07add9ac7106/Untitleddesign3.png',
    sx: {
      height: { xs: '200px',sm:'400px', md: '350px' },
      gridColumn: { xs: '1 / -1', md: '2 / 3' }, // Full width on mobile, second column on desktop
      gridRow: { md: '1 / 2' }, // First row on desktop
    },
  },
  {
    id: 3,
    title:'E-Architecture',
    url :'https://earchitecture-lb.com/',
    img: 'https://ucarecdn.com/5688f814-816f-4b88-ae60-bedabc173a9c/Untitleddesign4.png',
    sx: {
      height: { xs: '400px',sm:'400px', md: '350px' },
      gridColumn: { xs: '1 / -1', md: '2 / 3' }, // Full width on mobile, second column on desktop
      gridRow: { md: '2 / 3' }, // Second row on desktop
    },
  },
  {
    id: 4,
    title:'True Nature Blend',
    url :'https://truenatureblend.com',
    img: 'https://ucarecdn.com/77d9e524-6884-4d7c-9e67-d64d4dfcd258/Untitleddesign9.png',
    sx: {
      height: { xs: '200px',sm:'400px', md: '350px' },
      gridColumn: { xs: '1 / -1', md: '1 / 2' }, // Full width on mobile, first column on desktop
      gridRow: { md: '3 / 4' }, // Third row on desktop
    },
  },
 
  {
    id: 5,
    title:'Amaria Beauty',
    url :'https://amaria.beauty',
    img: 'https://ucarecdn.com/292b15a7-c922-44b1-8a5e-5056bd02f71c/brownminimalistnewcollectionsportwearinstagrampost.png',
    sx: {
      height: { xs: '400px',sm:'400px', md: '715px' },
      gridColumn: { xs: '1 / -1', md: '1 / 2' }, // Span full width on mobile, first column on desktop
      gridRow: { md: '1 / 3' }, // Span two rows on desktop
    },
  },
  {
    id: 6,
    title:'Galaxi LB - Clothing Brand',
    url :'https://galaxi-lb.com',
    img: 'https://ucarecdn.com/f0faec0f-88e3-4742-8bdd-ff097cf3bdb4/Untitleddesign8.png',
    sx: {
      height: { xs: '200px',sm:'400px', md: '350px' },
      gridColumn: { xs: '1 / -1', md: '1 / 2' }, // Full width on mobile, first column on desktop
      gridRow: { md: '4 / 5' }, // Fourth row on desktop
    },
  },
  {
    id: 7,
     title:'Mounet Dalia',
    url :'https://mounetdalia.com',
    img: 'https://ucarecdn.com/5b3c8690-f96c-49df-8b37-26e521c95c2b/Untitleddesign10.png',
    sx: {
      height: { xs: '400px',sm:'400px', md: '350px' },
      gridColumn: { xs: '1 / -1', md: '1 / 2' }, // Full width on mobile, first column on desktop
      gridRow: { md: '5 / 6' }, // Fifth row on desktop
    },
  },
  {
    id: 8,
        title:'TeenTops Electronics (Web + Mobile)',
    url :'https://play.google.com/store/apps/details?id=com.teentops',
    img: 'https://ucarecdn.com/2d4f6f80-539b-492d-8e5c-03d490ba00d7/Untitleddesign11.png',
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
            <Box>
              <a href={`${item.url}`}>
              <Btn sx={{ width: { xs: '140px', sm: 'auto' }, color: 'black' }}>
                View Site
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