"use client"
import { Grid, Box, Typography, Rating } from '@mui/material'
import React, { useEffect } from 'react'
import Btn2 from '../Btn/Btn2'
import Btn3 from '../Btn/Btn3'
import {gsap} from 'gsap';


export const testimonials = [

    {
        title: 'Deserves a 5 stars rating and more.',
        name:'“(Omar, Founder/CEO/Lead Interior Architect )',
        text : `Very professional and understanding. Prompt reply and fast delivery. Vito deserves a 5 stars rating and more.`
    },
    {
        title:'Professional work, Affordable prices ✔️✔️✔️',
        name:'“(Carla Kiwan, Beauty Brand Founder)',
        text:`Professional work
        Affordable prices
        Great effort
        ✔️✔️✔️
        `
    }
    ,
    {
        title: 'Amazing assistance and fast delivery with customization',
        name:'“(Rudy Bounafeh, Pet Business Owner)',
        text : `Amazing assistance and fast delivery with customization, Vito's always ready to help as soon as possible in case of any bug`
    },
    {
      name:'“(Fady, Electronics Relatiler)',
      title: 'Very professional and responsive. Highly recommended!',
      text: `Excellent service! My eCommerce site looks fantastic and works perfectly. Vito is very professional and responsive. Highly recommended!`
    },
   
    {
        title :`I knew I made the right choice - `,
        name:`”(Yehya, Founder of Teentops)`,
        text : `I was so impressed with the shop he built for me - it was so easy 
        to use! And when he built my 
        Android app, I knew I made the right choice. No regrets at all.
        `
    },
    
    
    {
        title :`They made it work perfectly - `,
        name:`”(Powerhouse’s Owner)`,
        text : `Vito really came through for me. I was worried that my huge inventory 
        would be too much for the site to handle, 
        but he made it work perfectly. I’m grateful.`
    },
    // {
    //     title : `I just love it! -`,
    //     name:`“(Zekra Advertising Specialist)`,
    //     text : `We’re a local business and most of our clients are 
    //     Lebanese. What I love about
    //      the site is that it supports both arabic and english at the same time.`
    // },
   
];


const Portfolio = () => {

    const animateTestimonials = () => {
        const testimonialsTL = gsap.timeline({
          scrollTrigger: {
            trigger: ".testimonial-subtitle",
            start: "top 80%",
          }
        });
      
        testimonialsTL.to('.testimonial-title', {
            y: 0,
          opacity: 1,
          duration: .3,
        
        });
      
        testimonialsTL.to('.testimonial-subtitle', {
            y: 0,
          opacity: 1,
          duration: .25,
          delay:.15
        });
      
        testimonialsTL.to('.testimonial-item', {
            y: 0,
          opacity: 1,
          duration: .45,
          stagger: 0.15,
        
        });
      };
      
      useEffect(() => {
      animateTestimonials();
       
      }, [])
      
  return (
    <Grid id='Testimonials' container className='flex  auto' sx={{
        zIndex:'10',
        // minHeight:'100vh',
        backgroundImage:'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 43.55), #000 35%)',
        background : {xs:
          'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 33.55), #000 45%)',
xl:'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 33.55), #000 35%)',


        },

        pb:13,
        pt:12,
        px:1,
        
        }}>
            <Box 
            className='auto col flex center'
            sx={{
              width:'100%',
                // minWidth:{xs:'80vw'}, 
                py:4}}>
            <Typography className='white y10 op0  testimonial-title text-center auto' sx={{pb:1,fontWeight:700,
              fontSize:{xs:'3em',sm:'3em',md:'4em'},
              maxWidth:'md',
              }}>
{/* Voices of success from beloved clients */}
            {`Client's reviews`}
</Typography>
<Typography
className='white y10 op0 testimonial-subtitle text-center w100'
sx={{fontWeight:200,fontSize:{xs:'.9em',sm:'.85em',md:'1em'}}}>

Real stories from satisfied clients who I had the honour to work with.
          </Typography>
            </Box>
        <Box sx={{
            
            maxWidth:{sm:'95%',md:'95%',lg:'lg'}}}
             className='white auto center w100 justify-center h100 flex col'>
          </Box>
            <Box sx={{maxWidth:'lg'}} className='flex row gap2 auto wrap center'>
                {testimonials.map(i=>{
                    return <Box 
                    key={i.name}
                    
                    className='flex y10 op0 testimonial-item center text-center  row tech-item  ' sx={{
                      border: '1px solid #ffffff21 !Important',maxWidth:'300px',
                      // background: '#0c102178',
                      
                      borderRadius:'4px !important',
                      px:2,
                      py:2,
                      // backgroundColor: '#0c1021 !Important',
                      gap:1}}>
                        {/* <Box sx={{width:{xs:'20px'}}}>
                            <img src="https://cdn-icons-png.flaticon.com/128/875/875209.png" alt="" className="img" />
                        </Box> */}
                        <Box sx={{py:1,px:1}}>
                            <Rating sx={{fontSize:'1.2em'}} readOnly value={5}/>
                         
                            <Typography  sx={{color:'#ffffffe6',fontSize:'1em',}}>
                        {i?.text}
                            </Typography>
                            <Typography className='gray2' sx={{fontSize:'.8em',py:.5}}>
                        {i?.name}
                            </Typography>
                        </Box>
                    </Box>
                })}
            </Box>
        </Grid>
  )
}

export default Portfolio