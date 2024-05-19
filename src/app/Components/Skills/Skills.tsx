"use client"
import { Grid, Box, Typography } from '@mui/material'
import React from 'react'
import Btn2 from '../Btn/Btn2'
import Btn3 from '../Btn/Btn3'


const skills = [
    { name: 'HTML', img: '' },
    { name: 'React', img: '' },
    { name: 'Scss', img: '' },
    { name: 'Next.js', img: '' },
    { name: 'MongoDB', img: '' },
    { name: 'JavaScript', img: '' },
    { name: 'Typescript', img: '' },
    { name: 'Express.js', img: '' },
    { name: 'MySQL', img: '' },
    { name: 'Node.js', img: '' },
    { name: 'ASP.NET', img: '' },
    { name: 'GraphQl', img: '' },
    { name: 'Aws', img: '' },
    { name: 'Jira', img: '' },
    { name: 'Git', img: '' },

  ];
const Portfolio = () => {
  return (
    <Grid container className='flex  auto' sx={{
        zIndex:'10',
        // minHeight:'100vh',
        backgroundImage:'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 43.55), #000 35%)',
        background:'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 33.55), #000 45%)',

        pb:13,
        pt:12,
        px:1,
        
        }}>
            <Box 
            className='auto col flex center'
            sx={{
              // width:'100%',
                // minWidth:{xs:'80vw'}, 
                py:4}}>
            <Typography className='white text-center auto' sx={{pb:1,fontWeight:700,
              fontSize:{xs:'3em',sm:'3em',md:'4em'}}}>
Few Of My Masterp iece Work

</Typography>
<Typography
className='white text-center w100'
sx={{fontWeight:200,fontSize:{xs:'.9em',sm:'.85em',md:'1em'}}}>

I am Kilian, a passionate freelancer from Hamburg
          </Typography>
            </Box>
        <Box sx={{
            
            maxWidth:{sm:'95%',md:'95%',lg:'lg'}}}
             className='white auto center w100 justify-center h100 flex col'>
          </Box>
            <Box sx={{maxWidth:'md'}} className='flex row gap2 auto wrap center'>
                {skills.map(i=>{
                    return <Box
                    key={i?.name}
                    className='flex row tech-item  ' sx={{
                      border: '1px solid #ffffff21 ',
                      backgroundColor: '#0c1021 !Important',
                      gap:1}}>
                        <Box sx={{width:{xs:'20px'}}}>
                            <img src="https://cdn-icons-png.flaticon.com/128/875/875209.png" alt="" className="img" />
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