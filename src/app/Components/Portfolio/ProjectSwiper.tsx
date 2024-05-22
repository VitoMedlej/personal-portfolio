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
import { Box, Typography } from '@mui/material';

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
                spaceBetween: 20,
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
                {
                  img:`https://images.pexels.com/photos/10923286/pexels-photo-10923286.jpeg?auto=compress&cs=tinysrgb&w=700&lazy=load`,
                  title: `Conceptual Clothing Brand`,
                  href : `conceptual-wic.com`
                },
                {
                  img:`https://ucarecdn.com/20fdd745-f27d-4fcc-810a-b1579112422f/-/resize/700x700/`,
                  title: `BeeOrganic Natural Honey`,
                  href : `https://www.beeorganic-lb.com`
                },
                {
                  img:`https://ucarecdn.com/96a270dc-3a32-432a-a2cd-5db9503d013b/417767658_746143730765594_3189711186697857321_n.jpg`,
                  title: `NumberOneByCarla Skin Care `,
                  href : `https://number1bycarla.com`
                },
                {
                  img:`https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                  title: `Millionairebia Club `,
                  href : `https://millionairebia.com`
                },
                {
                  img:`https://ucarecdn.com/2cdd8343-8083-47c3-ba65-727d06ec4486/tp2.PNG`,
                  title: `Teentops mobile app`,
                  link : 'Google Play Store',
                  href : `https://play.google.com/store/apps/details?id=com.teentops`
                },
                
                {
                  img:`https://ucarecdn.com/f27f5048-940f-4a0f-9ab5-6aa91906d1f5/-/resize/700x700/`,
                  title: `True Nature Blend`,
                  href : `https://truenatureblend.com`
                },
                {
                  img:`https://images.pexels.com/photos/53212/one-world-trade-center-manhattan-owtc-new-york-53212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                  title: `Design Compass | Interior Design Firm`,
                  href : `https://designcompass-lb.com`
                },
                {
                  img:`https://images.pexels.com/photos/10984997/pexels-photo-10984997.jpeg?auto=compress&cs=tinysrgb&w=700`,
                  title:'DIY Crafts Diamond Paintings Shop',
                  href: 'diycraftsdiamond.com'
                },

                {
                  img:`https://ucarecdn.com/4a7e0e1c-47b7-4196-bfa7-b474365da6c8/WhatsAppImage20240428at125445_21f13c27.jpg
                  `,
                  title: `Prospecs For Capacity Development Trainings`,
                  href : `https://number1bycarla.com`
                },
                {
                  img:`https://ucarecdn.com/1a95afe1-0e8e-41fb-a4fa-00ef857ef23a/418621867_1412854806328214_6415211719117463606_n.jpg`,
                  title: `Mounet Dalia Ecommerce`,
                  href : `https://mounetdalia.com`
                },


                {
                  img:`https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
                  title: `The Craft Room Ecommerce`,
                  href : `https://thecraftroom.com`
                },
                

                
            ].map(i=>{
                return <SwiperSlide key={i.img}>
                    <Box 
                    
                    
                    className='relative project-card' sx={{height:{xs:'440px',sm:'440px'},
                     border: '1px solid #ffffff21 ',
                     backgroundColor: '#0c1021 !Important',
                      borderRadius:'9px',
                    width:{xs:'97%',md:'300px',lg:'320px'}}}>
                      <Box className="decoy">
                        <Box className='center col auto w100 justify-center flex h100 items-center'>
                          <Typography className='text-center ' sx={{px:1,fontWeight:600,fontSize:'1.5em'}}>
                        {i?.title}
                          </Typography>

                          <a href={i?.link ? i?.link : i.href} 
                          target='_blank'
                          className="white flex row center items-center  decor-none">

                          <Typography className='cursor pointer' sx={{pt:.5,fontSize:'.8em'}}>
                        {i?.link ? i?.link : i.href  }
                          </Typography>
                          <Box sx={{width:'15px',height:'15px',ml:.35}}>
                            <img src="https://cdn-icons-png.flaticon.com/128/2990/2990159.png"
                             alt="" className="img invert contain" />
                          </Box>
                          </a>

                        </Box>
                      </Box>

                        <img
                        style={{
                      borderRadius:'9px',
                        }}
                        src={i.img} alt="" className="img" />
                    </Box>
                </SwiperSlide>
         
            })
        }
      </Swiper>
    </>
  );
}
