"use client";

import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Scrollbar from 'smooth-scrollbar';

const Page = () => {
  useEffect(() => {
    const doc : any = document.querySelector('#my-scrollbar')
    const scrollbar = Scrollbar.init(doc, {
      damping: 1,
    });

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <Box
    // id='my-scrollbar'
      sx={{
        height: '100vh',
        overflow: 'hidden', // Hides native scrollbars
      }}
    >
      <Box sx={{ padding: 4 }}>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae cumque necessitatibus...
        </Typography>
        <Typography sx={{ color: 'black', py: 8 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae cumque necessitatibus...
        </Typography>
        {/* Add more content as needed */}
      </Box>
    </Box>
  );
};

export default Page;
