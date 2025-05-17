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

    if (window.innerWidth > 768) {
      item.addEventListener('mouseenter', () => {
        gsap.to(target, { opacity: 1, y: 0, duration: 0.15, ease: 'none' });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(target, { opacity: 0, y: 40, duration: 0.15, ease: 'none' });
      });
    } else {
      gsap.set(target, { opacity: 1, y: 0 });
    }
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
          sx={{
            ...item.sx,
            minHeight: { xs: 360, md: 'unset' }, // Taller on mobile, unchanged on desktop
          }}
        >
          <Box className='project-name-box flex col absolute space-between'
            sx={{
              width: '-webkit-fill-available',
              px: 2,
              zIndex: 12,
              py: 3,
              bottom: 0,
              background: 'white',
              opacity: { xs: 1, sm: 0 },
              transform: 'translateY(40px)',
            }}>
            <Box>
              <Typography sx={{ color: 'black', fontWeight: 300, fontSize: { xs: '.8em', sm: '.8em', lg: '0.87em' } }}>
                {item.type}
              </Typography>
              <Typography sx={{ color: 'black', fontWeight: 700, fontSize: { xs: '.9em', sm: '1em', lg: '1.57em' } }}>
                {item.title}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 1,
                mt: 2,
                width: '100%',
              }}
            >
              <a href={`/work/${item.title}`} style={{ width: '100%' }}>
                <Btn
                  sx={{
                    fontSize: { xs: '.75em', sm: '.9em' },
                    width: '100%',
                    color: 'black',
                    justifyContent: 'space-between',
                  }}
                >
                  Case Study
                  <Box sx={{ width: '20px', height: '30px' }}>
                    <img src="https://cdn-icons-png.flaticon.com/128/1654/1654190.png" alt="" className="img contain" />
                  </Box>
                </Btn>
              </a>
              <a target='_blank' href={`${item.url}`} style={{ width: '100%' }}>
                <Btn
                  sx={{
                    fontSize: { xs: '.75em', sm: '.9em' },
                    width: '100%',
                    color: 'black',
                    border:'none',
                    justifyContent: 'space-between',
                  }}
                >
                  View Live
                 
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