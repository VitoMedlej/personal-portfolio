"use client";

import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Scrollbar from 'smooth-scrollbar';
import { useParallaxEffect } from '../hooks/useParallex';

const Page = () => {
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const doc: any = document.querySelector('#my-scrollbar');
  
    if (doc) {
      const scrollbar = Scrollbar.init(doc, {
        damping: isMobile ? 0.04 : 0.08, // Keeps it smooth but responsive on both mobile and desktop
        thumbMinSize: 20,
        renderByPixels: true,
        continuousScrolling: true, // Allow continuous scrolling, but we'll make it smooth
        plugins: {
          overscroll: {
            enable: false, // Disable any overscroll so it doesn’t bounce around
          },
        },
      });
  
      return () => {
        scrollbar.destroy();
      };
    }
  }, []);
  
  useParallaxEffect();

  return (
    <Box
    // id='my-scrollbar'
      sx={{
        minHeight: '1200px',
        overflow: 'hidden', // Hides native scrollbars
      }}
    >
      <Box sx={{ padding: 4 }}>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consecteturfasfing elit. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectasfasfasfasfsicing elit. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur adipigsdgbdgt. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur asdgqwrqwrlit. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur adz24241as. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur adzasd. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet con23124ur adipisicing elit. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur a124124124124124icing elit. Dolorem quae cumque necessitatibus...
        </Typography>
        {/* Add more content as needed */}
      </Box>
    </Box>
  );
};

export default Page;
