'use client';

import { Box, Dialog, DialogTitle, DialogActions, Button, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import Btn from '../Btn/Btn';

const SMicons = ({ sx, invert, className }: { sx?: any, invert?: boolean, className?: string }) => {
  const [open, setOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ my: 2, gap: 2, ...sx }} className={`flex row center ${className ? className : ''}`}>
        {
          [
            {
              img: `https://cdn-icons-png.flaticon.com/128/3670/3670274.png`,
              href: `https://www.instagram.com/waves.code/`,
              label: 'Instagram'
            },
            {
              img: `https://cdn-icons-png.flaticon.com/128/2111/2111432.png`,
              href: `https://github.com/VitoMedlej?tab=overview&from=2024-06-4`,
              label: 'GitHub'
            },
            {
              img: `https://cdn-icons-png.flaticon.com/128/1384/1384014.png`,
              href: `https://www.linkedin.com/in/vitomedlej/`,
              label: 'LinkedIn'
            },
            {
              img: `https://cdn-icons-png.flaticon.com/128/6244/6244710.png`,
              href: `mailto:contact@vito-medlej.com`,
              onClick: handleMailClick,
              label: 'Email'
            },
            {
              img: `https://cdn-icons-png.flaticon.com/128/909/909263.png`,
              href: `https://drive.google.com/file/d/1-N_u-VgRQlf0j7-7_NgaDXvBjzLysvSp/view?usp=sharing`,
              label: 'Resume'
            },
          ].map(link => {
            return (
              <Tooltip key={link.img} title={link.label} arrow>
                <a target='_blank' href={link.href} onClick={link.onClick}>
                  <Box sx={{ width: '30px' }}>
                    <img src={link?.img} alt={link.label} className={invert ? 'img invert' : 'img'} />
                  </Box>
                </a>
              </Tooltip>
            );
          })
        }
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>contact@vito-medlej.com</DialogTitle>
        <DialogActions>
          <Btn sx={{ width: '50%' }} onClick={() => {
            navigator.clipboard.writeText('contact@vito-medlej.com');
            setIsSaved(true);
          }}>
            {isSaved ? 'Copied!' : 'Copy Email'}
          </Btn>
          <Btn sx={{ width: '50%' }} onClick={() => window.location.href = 'mailto:contact@vito-medlej.com'}>
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
