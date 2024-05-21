"use client"
import { Grid, Box, Typography, Rating } from '@mui/material'
import React from 'react'
import Btn2 from '../Btn/Btn2'
import Btn3 from '../Btn/Btn3'


const testimonials = [
    { name: 'John Doe', text: 'onbeirut transformed our website with their exceptional HTML skills.' },
    { name: 'Jane Smith', text: 'The React application developed by onbeirut was top-notch.' },
    { name: 'Alice Johnson', text: 'onbeirut\'s mastery of Scss made our website look stunning.' },
    { name: 'Bob Williams', text: 'The Next.js project delivered by onbeirut exceeded our expectations.' },
    { name: 'Charlie Brown', text: 'onbeirut handled our MongoDB database efficiently.' },
    { name: 'Emily Davis', text: 'The JavaScript code written by onbeirut was clean and efficient.' },
    { name: 'Frank Miller', text: 'onbeirut\'s use of Typescript in our project improved its stability.' },
    { name: 'Grace Wilson', text: 'The Express.js backend developed by onbeirut was robust and secure.' },
    { name: 'Harry Moore', text: 'onbeirut managed our MySQL databases effectively.' },
  
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
              width:'100%',
                // minWidth:{xs:'80vw'}, 
                py:4}}>
            <Typography className='white text-center auto' sx={{pb:1,fontWeight:700,
              fontSize:{xs:'3em',sm:'3em',md:'4em'}}}>
Voices of success from beloved clients

</Typography>
<Typography
className='white text-center w100'
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
                    
                    className='flex center text-center  row tech-item  ' sx={{
                      border: '1px solid #ffffff21 !Important',maxWidth:'300px',

                      borderRadius:'4px !important',
                      px:2,
                      py:2,
                      backgroundColor: '#0c1021 !Important',
                      gap:1}}>
                        {/* <Box sx={{width:{xs:'20px'}}}>
                            <img src="https://cdn-icons-png.flaticon.com/128/875/875209.png" alt="" className="img" />
                        </Box> */}
                        <Box sx={{py:1,px:1}}>
                            <Rating sx={{fontSize:'1em'}} readOnly value={5}/>
                            <Typography sx={{color:'white',pb:.5}}>
                        {i?.name}
                            </Typography>
                            <Typography className='gray2' sx={{fontSize:'.8em',}}>
                        {i?.text}
                            </Typography>
                        </Box>
                    </Box>
                })}
            </Box>
        </Grid>
  )
}

export default Portfolio