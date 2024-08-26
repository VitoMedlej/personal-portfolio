"use client";
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const scrollElement : any = document.querySelector('#my-scrollbar');
    const scrollbarInstance = Scrollbar.get(scrollElement);

    const handleScroll = () => {
      if (scrollbarInstance) {
        setShowButton(scrollbarInstance.scrollTop > 300); // Show button after scrolling 300px
      }
    };

    if (scrollbarInstance) {
      scrollbarInstance.addListener(handleScroll);
    }

    return () => {
      if (scrollbarInstance) {
        scrollbarInstance.removeListener(handleScroll);
      }
    };
  }, []);

  const scrollUp = () => {
    const scrollElement : any = document.querySelector('#my-scrollbar');
    const scrollbarInstance = Scrollbar.get(scrollElement);

    if (scrollbarInstance) {
      scrollbarInstance.scrollTo(0, 0, 500); // Smooth scroll to top
    } else {
      console.error('Smooth scrollbar instance not found.');
    }
  };

  return (
    showButton && (
      <Box
        onClick={scrollUp}
        sx={{
          width: '45px',
          height: '45px',
          right: '4%',
          bottom: '2%',
          zIndex: 13,
          position: 'fixed', // Use fixed positioning to stay visible while scrolling
          cursor: 'pointer',
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/14020/14020258.png"
          alt="Scroll to top"
          className="img"
        />
      </Box>
    )
  );
};

export default ScrollToTop;
