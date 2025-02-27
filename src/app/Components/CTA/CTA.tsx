import { Box, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'

const CTA = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
    <Box  sx={{height:{xs:'100%',md:'700px'},mt:8,mx:'auto',px:0,py:{xs:16,md:4}}}
    
    className='bg4 relative flex center text-center  items-center col'>

        <Box sx={{width:{xs:'200px',md:'350px'},right:'-3%'
        ,top:{xs:'-15%'}
        ,height:{xs:'200px',md:'350px'}}}
        className='absolute'
        >
          <img
          alt='3d abstract'
          src="https://static.vecteezy.com/system/resources/previews/028/615/543/non_2x/spiral-3d-curve-line-decorative-element-free-png.png"
          className="img contain parallex" />
        </Box>

        <Box sx={{width:{xs:'120px',md:'350px'},left:'-3%'
        ,top:{xs:'-7%'}
        ,height:{xs:'120px',md:'350px'}}}
        className='absolute'
        >
          <img
          src="https://ucarecdn.com/4bf01766-3cf3-40da-8936-9e2123a3116f/blueshape.webp" alt="" 
          className="img contain parallex" />
        </Box>



      <Box className='flex col center items-center scale-reverse'>
        <Box sx={{width:'25px',height:'25px'}}>
          <img src="https://cdn-icons-png.flaticon.com/128/102/102649.png" alt="" className="img" />
        </Box>
          <Typography className='clr2'>
          Trusted by 100% of my clients  
          </Typography>
      </Box>
      <Box className='scale-reverse' sx={{px:1,mt:.5}} >
        <Typography sx={{fontSize:{xs:'2.6em',sm:'3.5em'},fontWeight:900}}>
          {`LET'S BUILD THE FUTURE TODAY `}
        </Typography>
        <Typography className='auto' sx={{maxWidth:'600px',fontSize:{xs:'.9em',sm:'1.15em'},fontWeight:300}}>
              {`Looking for someone that actually listens to your requirements, 
              understands them, and executes efficiently and effectively? Reach Out!
              `}
          </Typography>
      </Box>
   
    <Box className='bg4 absolute ' sx={{
              display:{xs:'none',md:'flex'},
              bottom:0,
              width:'100%',
              height:{md:'100px'}}}>
                <Box className='flex items-center' sx={{textAlign:'left',px:2,width:'50%'}}>
              <Typography className='color4' sx={{fontSize:'.8em'}}>
               Do not be shy to say Hi! Always glad to help out or answer questions!
              </Typography>
                </Box>
                
                <Box 
                className='bg5 flex center items-center' 
                sx={{width:'20%',px:2}}>
                <a href='https://www.linkedin.com/in/vitomedlej/' target="_blank" className='fill'>

                <Btn 
                sx={{width:'100%',margin:0,boder:'1px solid white !important',color:'white',height:'70px',borderRadius:'900px'}}>
                  Get In Touch
                </Btn>
                  </a>
                </Box>
                <Box 
                sx={{background:'#d8d8d8',width:'30%'}}>
                </Box>
            </Box>
            </Box>

            </Box>
  )
}

export default CTA