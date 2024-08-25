"use client"
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Btn from '../Btn/Btn';

const items = [
  {
    id: 1,
    img: 'https://miller.bslthemes.com/pixy-demo/img/works/1/1.jpg',
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

const YourComponent = () => (
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
        key={item.id}
        item
        sx={item.sx}
      >
        <Box className="image-container" sx={{ height: '100%' }}>
          <img
            src={item.img}
            alt=""
            className="img"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Grid>
    ))}

  </Grid>
);

export default YourComponent;