"use client";
import { useMediaQuery } from '@mui/material';
import React from 'react';
import Starter from '../3dComponents/Starter/Starter';
import Mobile from '../3dComponents/mobile/Mobile';
import Desktop from '../3dComponents/desktop/Desktop';

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