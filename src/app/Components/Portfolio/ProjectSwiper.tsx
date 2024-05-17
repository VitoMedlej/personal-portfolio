"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, FreeMode } from 'swiper/modules';
import { Box } from '@mui/material';

export default function App() {
  return (
    <>
      <Swiper
        breakpoints={{
            // when window width is >= 640px
            340: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            540: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          freeMode={true}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation,FreeMode]}
        className="mySwiper"
      >
        {
            [
                `https://assets-global.website-files.com/5d0c1f167f832288097a09a2/656695598e59d96d37d17d6c_asdasd-p-500.png`,
                ,`https://www.lokkeestudios.com/_astro/lokkee.cnzVWO9o_Z1wM7CJ.webp`
                ,`https://assets-global.website-files.com/5d0c1f167f832288097a09a2/656695598e59d96d37d17d6c_asdasd-p-500.png`,
                ,`https://www.lokkeestudios.com/_astro/lokkee.cnzVWO9o_Z1wM7CJ.webp`
                ,`https://assets-global.website-files.com/5d0c1f167f832288097a09a2/656695598e59d96d37d17d6c_asdasd-p-500.png`,

            ].map(i=>{
                return <SwiperSlide key={i}>
                    <Box sx={{height:'400px',width:{xs:'97%',md:'300px',lg:'350px'},background:'red'}}>
                        <img src={i} alt="" className="img" />
                    </Box>
                </SwiperSlide>
         
            })
        }
      </Swiper>
    </>
  );
}
