"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import { Autoplay } from 'swiper/modules';
import { MyComponentProps } from './ReviewSection';
import { Box, Rating, Typography } from '@mui/material';
import 'swiper/swiper-bundle.css';


// install Swiper modules
SwiperCore.use([Autoplay]);

const MySwiperComponent: React.FC<MyComponentProps> = ({data}) => {
  return (
    <Swiper
    className=''
      spaceBetween={10}
      loop
      speed={500}
      
      slidesPerView={1}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
    >
        
         {data.map((item, index) => {

         
      return <SwiperSlide key={item?.title}>

        <Box className='flex touch-none center col items-center justify-center' key={item?.title}>
          <Rating sx={{fontSize:'.8em'}} name="simple-controlled" value={5} readOnly />
          <Typography sx={{fontWeight:200}} className='center text-center white' variant="body1" gutterBottom>
            {`"${item.title}"`}
          </Typography>
        </Box>
        </SwiperSlide>
      })}

     
    </Swiper>
  );
};

export default MySwiperComponent;