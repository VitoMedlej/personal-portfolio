"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Btn from '../Btn/Btn'
import Btn2 from '../Btn/Btn2'
import Btn3 from '../Btn/Btn3'
import Link from 'next/link'
import {gsap} from 'gsap';

const Navbar = () => {
  const [isOpen,setOpen] = useState(false)
  console.log('isOpen: ', isOpen);
  const navRef = useRef(null);
  const [isAnimating, setAnimating] = useState(false);

  const openMenu = () => {
    setOpen(true);
    setAnimating(true);
    document.body.classList.add('no-scroll');
    // gsap.killTweensOf('.overflowed'); // Kill any running tweens
    gsap.set('.overflowed', { display: 'flex' }); // Set display to flex immediately
    gsap.to('.overflowed', { opacity: 1, duration: 0.15, delay: 0.015, onComplete: () => setAnimating(false) });
  };

  const closeMenu = () => {
    setAnimating(true);
    setOpen(false);
    document.body.classList.remove('no-scroll'); 
    // gsap.killTweensOf('.overflowed'); // Kill any running tweens
    gsap.to('.overflowed', { opacity: 0, duration: 0.15, delay: 0.015, onComplete: () => {
      gsap.set('.overflowed', { display: 'none', delay:.35 });
      setAnimating(false);
    }});
  };

  // useEffect(() => {
  //   if (isOpen) {
    
  //   } else {
    
  //   }
  // }, [isOpen]);


  return (
    <>
       <Box 
       ref={navRef}
       sx={{
  backdropFilter: 'blur(6px)',
      display:'none',
      opacity:0,
       }}
       className='overflowed '>

        <Box sx={{ top: '16%'}} className='white nav-menu'>
          <Link className='decor-none white' href='/'>
          <Typography sx={{fontSize:'1.2em'}}>
            Hello wolrd  
          </Typography>
          </Link>
        </Box>
        <Box sx={{ top: '24%'}} className='white nav-menu'>
          <Link className='decor-none white' href='/'>
          <Typography sx={{fontSize:'1.2em'}}>
            Hello wolrd  
          </Typography>
          </Link>
        </Box>
        <Box sx={{ top: '32%'}} className='white nav-menu'>
          <Link className='decor-none white' href='/'>
          <Typography sx={{fontSize:'1.2em'}}>
            Hello wolrd  
          </Typography>
          </Link>
        </Box>
</Box>

    <Container
    
    className={`flex absolute center c50 between row justify-between items-center ${false ? 'bg' : ''}`} 
    sx={{
      
      maxWidth:{xs:'98%',sm:'97%',lg:'1150px'},
      zIndex:12467,
      py:2,
      // border:'1px solid white',
      border: isOpen ? '1px solid #ffffff21 ' : '1px solid transparent',
      backgroundColor: isOpen ? '#0c1021 !Important' :'transparent',
    mt:2,
    borderRadius:"900px"}}>
     
     
     <Box
          onClick={isOpen ? closeMenu : openMenu}
          className="cursor pointer"
          sx={{ width: '30px' }}
        >
          <img
            src={isOpen ? "https://cdn-icons-png.flaticon.com/128/10728/10728089.png" : "https://cdn-icons-png.flaticon.com/128/4543/4543046.png"}
            alt=""
            className="img invert"
          />
        </Box>
        
      
        

        <Box className='cent' sx={{height:'50px'}}>
          <img  src="https://cdn-icons-png.flaticon.com/128/6415/6415824.png" alt="" className="img invert" />
        </Box>

        <Box>
        <Btn className="" sx={{
            ':hover':{color:'#550df4 !Important'},
            gap: 1, px:2 }}>
            <Typography sx={{
                
                fontSize: '.7em' }}>
              Hit me up
            </Typography>
            <Box sx={{ width: '20px', height: '20px' }} className="invert">
              <img src="https://cdn-icons-png.flaticon.com/128/9314/9314363.png" alt="" className="img" />
            </Box>
          </Btn>
        </Box>
    </Container>
  
    </>

  )
}

export default Navbar