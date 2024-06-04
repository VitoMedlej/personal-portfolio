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
      spaceBetween={0}
      loop
      speed={500}
      
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
        
         {data.map((item, index) => {

         
      return <SwiperSlide className='review-mobile w100' key={item?.title}>

        <Box className='flex touch-none center col items-center justify-center' key={item?.title}>
          <Rating sx={{fontSize:'.8em'}} name="simple-controlled" value={5} readOnly />
          <Typography sx={{fontWeight:200,fontSize:'.8em'}} className='center gray2 text-center white'  gutterBottom>
            {`"${item.title}"`}
          </Typography>
        </Box>
        </SwiperSlide>
      })}

     
    </Swiper>
  );
};

export default MySwiperComponent;