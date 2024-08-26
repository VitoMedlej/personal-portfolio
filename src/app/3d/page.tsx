"use client";
import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import Desktop from '../3dComponents/Desktop';
import Mobile from '../3dComponents/Mobile';
import Starter from '../3dComponents/Starter/Starter';

const Page = () => {
  const isSmallScreen = useMediaQuery('(max-width:690px)');
//   const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  return (
    <>
    <Starter/>
      {isSmallScreen ? (
        <>
          <Mobile />
        </>
      ) : (
        <>
          <Desktop />
        </>
      )}
    </>
  );
};

export default Page;