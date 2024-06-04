"use client"
import { Grid, Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import {gsap } from 'gsap';


const skills = [
    { name: 'HTML', img: 'https://cdn-icons-png.flaticon.com/128/1051/1051277.png' },
    { name: 'React', img: 'https://cdn-icons-png.flaticon.com/128/875/875209.png' },
    { name: 'Scss', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968358.png' },
    { name: 'Next.js', img: 'https://www.wpgraphql.com/_next/image?url=%2Flogos%2Flogo-nextjs.png&w=384&q=75' },
    { name: 'MongoDB', img: 'https://th.bing.com/th/id/R.0e23481b805fa66eb9ff0c177ff27030?rik=00LN9yVT3nMAyw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-mongodb-png-mongodb-1600.png&ehk=YwJU48GqAzZ6V3Zlafc4pyilw%2biV5XBxEO7chpNV3M8%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'JavaScript', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png' },
    { name: 'Typescript', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png' },
    { name: 'Express.js', img: 'https://th.bing.com/th/id/R.c502658a509d27b53679b3ef73c0d82f?rik=dFP%2b9LyCq64MMg&pid=ImgRaw&r=0' },
    { name: 'MySQL', img: 'https://cdn-icons-png.flaticon.com/128/5968/5968313.png' },
    { name: 'Node.js', img: 'https://cdn-icons-png.flaticon.com/128/15379/15379746.png' },
    { name: 'ASP.NET', img: 'https://cdn-icons-png.flaticon.com/128/10093/10093894.png' },
    { name: 'GraphQl', img: 'https://th.bing.com/th/id/R.2452f53338fcbb9b15936f609a1d3840?rik=ekWLr%2fjJoQUyiA&pid=ImgRaw&r=0' },
    { name: 'Aws', img: 'https://logohistory.net/wp-content/uploads/2023/06/AWS-Symbol.png' },
    { name: 'Jira', img: 'https://cdn.freelogovectors.net/wp-content/uploads/2023/09/jira-software_logo-freelogovectors.net_.png' },
    { name: 'Git', img: 'https://cdn-icons-png.flaticon.com/128/15466/15466163.png' },

  ];
const Portfolio = () => {



  const animateSkills = () => {
    const testimonialsTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-subtitle",
        start: "top 80%",
      }
    });
  
    testimonialsTL.to('.skills-title', {
        y: 0,
      opacity: 1,
      duration: .35,
    
    });
  
    testimonialsTL.to('.skills-subtitle', {
        y: 0,
      opacity: 1,
      duration: .25,
      delay:.15
    });
  
    testimonialsTL.to('.skill-item', {
        y: 0,
      opacity: 1,
      duration: .15,
      stagger: 0.2,
    
    });
  };
  
  useEffect(() => {
  animateSkills();
  }, [])
  


  return (
    <Grid container id='Skills' className='flex  auto' sx={{
        zIndex:'10',
        // minHeight:'100vh',
        backgroundImage:'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 43.55), #000 35%)',
        background:'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 33.55), #000 45%)',

        pb:13,
        pt:12,
        px:1,
        
        }}>
            <Box 
            className='auto col w100 flex center'
            sx={{
              // width:'100%',
                // minWidth:{xs:'80vw'}, 
                py:4}}>
            <Typography className='white text-center auto skills-title op0 y20' sx={{pb:1,fontWeight:700,
              fontSize:{xs:'3em',sm:'3em',md:'4em'}}}>
                {/* My Expertise and Abilities */}
                My Technical Skills

</Typography>
<Typography
className='white text-center w100 skills-subtitle op0 y20'
sx={{fontWeight:200,fontSize:{xs:'.9em',sm:'.85em',md:'1em'}}}>

My Expertise and technical abilities that I have acquired over the years 
          </Typography>
            </Box>


        <Box sx={{
            flex:1,
            maxWidth:{sm:'95%',md:'95%',lg:'lg'}}}
             className='white w100 auto center w100 justify-center h100 flex col'>
          </Box>


            <Box sx={{maxWidth:'md'}} className='flex row gap2 auto wrap center'>
                {skills.map(i=>{
                    return <Box
                    key={i?.name}
                    className='flex row tech-item skill-item op0 y20  ' sx={{
                      border: '1px solid #ffffff21 ',
                      background: '#0c102178',
                      // backgroundColor: '#0c1021 !Important',
                      gap:1}}>
                        <Box sx={{width:{xs:'20px'}}}>
                            <img src={i.img} alt="" className="img contain" />
                        </Box>
                        <Box sx={{}}>
                            <Typography sx={{color:'white'}}>
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