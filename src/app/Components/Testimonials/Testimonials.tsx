"use client";
import { Grid, Box, Typography, Rating } from '@mui/material';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

export const testimonials = [
    {
        title: 'Deserves a 5 stars rating and more.',
        name: '“(Omar, Founder/CEO/Lead Interior Architect )',
        text: `Very professional and understanding. Prompt reply and fast delivery. Vito deserves a 5 stars rating and more.`
    },
    {
        title: 'Professional work, Affordable prices ✔️✔️✔️',
        name: '“(Carla Kiwan, Beauty Brand Founder)',
        text: `Professional work Affordable prices Great effort ✔️✔️✔️`
    },
    {
        title: 'Amazing assistance and fast delivery with customization',
        name: '“(Rudy Bounafeh, Pet Business Owner)',
        text: `Amazing assistance and fast delivery with customization, Vito's always ready to help as soon as possible in case of any bug`
    },
    {
        name: '“(Fady, Electronics Retailer)',
        title: 'Very professional and responsive. Highly recommended!',
        text: `Excellent service! My eCommerce site looks fantastic and works perfectly. Vito is very professional and responsive. Highly recommended!`
    },
    {
        title: `I knew I made the right choice - `,
        name: `”(Yehya, Founder of Teentops)`,
        text: `I was so impressed with the shop he built for me - it was so easy to use! And when he built my Android app, I knew I made the right choice. No regrets at all.`
    },
    {
        title: `They made it work perfectly - `,
        name: `”(Powerhouse’s Owner)`,
        text: `Vito really came through for me. I was worried that my huge inventory would be too much for the site to handle, but he made it work perfectly. I’m grateful.`
    },
];

const Portfolio = () => {
    return (
        <Grid sx={{pt:{xs:0,md:4},pb:{xs:8,sm:12},my:{xs:12,md:8}}} container>
            <Box style={{ width: '100%', textAlign: 'center' }}>
                <Typography className='color2 fade-in-text' sx={{ fontWeight: 900,

fontSize:{xs:'3em',sm:'3em',md:'4em'}
                 }}>
                    {`Client's reviews`}
                </Typography>
                <Typography
                className='fade-in-text'
                style={{ fontWeight: 200, fontSize: '1em' }}>
                    Real stories from satisfied clients who I had the honour to work with.
                </Typography>
            </Box>
            <Box sx={{ maxWidth: '95%', pt:4, margin: '0 auto' }}>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    speed={1300}
                    slidesPerView={1}
                    centeredSlides={true} // Center the active slide
                >
                    {testimonials.map((i, index) => (
                        <SwiperSlide
                        className='fade-in-text'
                        key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box style={{
                                border: '1px solid #ffffff21',
                                maxWidth: '400px',
                                borderRadius: '4px',
                                padding: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <Rating readOnly value={5} />

                                  <Typography
                                className='color2'
                                style={{ fontSize: '.8em', fontWeight:900, padding: '8px 0' }}>
                                    {i.name}
                                </Typography>

                                <Typography 
                                className='color3'
                                style={{  fontSize: '1em' }}>
                                    {i.text}
                                </Typography>

                              
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Grid>
    );
}

export default Portfolio;