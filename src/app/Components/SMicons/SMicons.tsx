'use client';

import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import React, { useState } from 'react';
import Btn from '../Btn/Btn';

const SMicons = ({ sx, invert, className }: { sx?: any, invert?: boolean, className?: string }) => {
  const [open, setOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default mailto behavior
    setOpen(true); // Open the modal
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
  };

  return (
    <>
      <Box sx={{ my: 2, gap: 2, ...sx }} className={`flex row center ${className ? className : ''}`}>
        {
          [
            {
              img: `https://cdn-icons-png.flaticon.com/128/3670/3670274.png`,
              href: `https://www.instagram.com/onbeirut/`
            },
            {
              img: `https://cdn-icons-png.flaticon.com/128/2111/2111432.png`,
              href: `https://github.com/VitoMedlej?tab=overview&from=2024-06-4`
            },
            {
              img: `https://cdn-icons-png.flaticon.com/128/1384/1384014.png`,
              href: `https://www.linkedin.com/in/vitomedlej/`
            },
            {
              img: `https://cdn-icons-png.flaticon.com/128/6244/6244710.png`,
              href: `mailto:contact@vito-medlej.com`,
              onClick: handleMailClick // Add onClick handler to the mailto link
            },
            {
              img: `https://cdn-icons-png.flaticon.com/128/909/909263.png`,
              href: `https://drive.google.com/file/d/109M7MRzpM1wdR8hKfszEc0UgzhHOc1YR/view?usp=sharing`
            },
          ].map(link => {
            return (
              <a
                target='_blank'
                key={link.img}
                href={link.href}
                onClick={link.onClick} // Assign onClick if it exists
              >
                <Box sx={{ width: '30px' }}>
                  <img src={link?.img} alt="" className={invert ? "img invert" : 'img'} />
                </Box>
              </a>
            )
          })
        }
      </Box>

      {/* Modal for email */}
      <Dialog open={open} onClose={handleClose}>
  <DialogTitle>contact@vito-medlej.com</DialogTitle>
  <DialogActions>
    <Btn 
    sx={{width:'50%'}}
    onClick={() => {
      navigator.clipboard.writeText('contact@vito-medlej.com');
      setIsSaved(true);
    }}>
      {isSaved ? 'Copied!' : 'Copy Email'}
    </Btn>
    <Btn sx={{width:'50%'}} onClick={() => window.location.href = 'mailto:contact@vito-medlej.com'}>
      Send Email
    </Btn>
  </DialogActions>
  <DialogActions>
    <Button onClick={handleClose}>Close</Button>
  </DialogActions>
</Dialog>
    </>
  );
};

export default SMicons;