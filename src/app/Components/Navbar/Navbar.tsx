"use client"
import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Btn from '../Btn/Btn'
// import Btn2 from '../Btn/Btn2'
// import Btn3 from '../Btn/Btn3'
import Link from 'next/link'
import SMicons from '../SMicons/SMicons'
import { useRouter } from 'next/navigation'
import {gsap } from 'gsap';


const Navbar = () => {
  const [isOpen,setOpen] = useState(false)
  const navRef = useRef(null);
  const [isAnimating, setAnimating] = useState(false);

  const openMenu = () => {
    setOpen(true);
    setAnimating(true);
    document.body.classList.add('no-scroll');
    // gsap.killTweensOf('.overflowed'); // Kill any running tweens
    gsap.set('.overflowed', { display: 'flex' }); // Set display to flex immediately
    gsap.to('.overflowed', { opacity: 1, duration: 0.15, delay: .015, onComplete: () => setAnimating(false) });
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

  useEffect(() => {
      
    gsap.to('.navbar', {y: 0 , x: '50%', duration: .5, 
    ease: "none",
    stagger: {
      each: 0.5,
      from: "center"
    },
    delay: 0.35, onComplete: () => {
      // gsap.set('.hero', { display: 'none', delay:.35 });
      // setAnimating(false);
    }});

    gsap.to('.navbar', { opacity: 1, y: 0 , x: '50%', duration: 1, 
    ease: "none",
   
    delay: 0.4
  });
    
  document.body.classList.remove('no-scroll'); 

  // document.body.classList.add('no-scroll');

    }, []);
    const router = useRouter()

    const ScrollToFn = () =>{
      gsap.to(window, {duration:2.5, scrollTo: "#Contact"});
      closeMenu();
    }
    // const isMobile = useMediaQuery('(min-width:900px)');
    // console.log('isMobile: ', isMobile);
    
    const navigate = (href : string) => {
      router.push(href)
    }


  return (
    <>
  
       <Box 
       ref={navRef}
       sx={{
  backdropFilter: 'blur(6px)',
      display:'none',
      opacity:0,
       }}
       className='overflowed   '>
        <Box sx={{width:'100%'}}>

        <Box onClick={()=>{closeMenu(); router.push('/#hero')}} 
        sx={{ top: '16%'}} className='white cursor pointer nav-menu'>
          <Link className='decor-none white' href='/'>
          <Typography sx={{fontSize:'1.2em'}}>
           Home
          </Typography>
          </Link>
        </Box>

        <Box onClick={()=>{closeMenu(); router.push('/3d')}} 
        sx={{ top: '24%'}} className='white cursor pointer nav-menu'>
          <Link className='decor-none ' style={{color:'#489fb5'}}  href='/3d'>
          <Typography sx={{fontSize:'1.2em'}}>
           View in 3D
          </Typography>
          </Link>
        </Box>


        <Box onClick={()=>{closeMenu(); 
   gsap.to(window, {duration:1.5, delay:.45, scrollTo: "#portfolio"});

        }} sx={{ top: '32%'}} className='white cursor pointer nav-menu'>
          <Link className='decor-none white' href='/'>
          <Typography sx={{fontSize:'1.2em'}}>
          Portfolio
          </Typography>
          </Link>
        </Box>

        <Box onClick={()=>{closeMenu(); 
   gsap.to(window, {duration:1.5, delay:.45, scrollTo: "#Skills"});

        }} sx={{ top: '40%'}} className='white cursor pointer nav-menu'>
          <Link className='decor-none white' href='/'>
          <Typography sx={{fontSize:'1.2em'}}>
          Skills
          </Typography>
          </Link>
        </Box>

        <Box onClick={()=>{closeMenu(); 
   gsap.to(window, {duration:1.5, delay:.45, scrollTo: "#Services"});

        }} sx={{ top: '48%'}} className='white cursor pointer nav-menu'>
          <Link className='decor-none white' href='/'>
          <Typography sx={{fontSize:'1.2em'}}>
          Services
          </Typography>
          </Link>
        </Box>

        <Box onClick={()=>{closeMenu(); 
   gsap.to(window, {duration:1.5, delay:.45, scrollTo: "#Testimonials"});

        }} sx={{ top: '56%'}} className='white cursor pointer nav-menu'>
          <Link className='decor-none white' href='/'>
          <Typography sx={{fontSize:'1.2em'}}>
          Testimonials
          </Typography>
          </Link>
        </Box>

        <Box onClick={()=>{closeMenu(); 
   gsap.to(window, {duration:1.5, delay:.45, scrollTo: "#Contact"});

        }} sx={{ top: '64%'}} className='white cursor pointer nav-menu'>
          <Link className='decor-none white' href='/'>
          <Typography sx={{fontSize:'1.2em'}}>
          Contact
          </Typography>
          </Link>
        </Box>


        
        <Box sx={{ px:1,top: '72%'}} className='absolute'>

        <SMicons invert/>
        </Box>

        </Box>


        {/* {isMobile && <Box sx={{
          borderLeft: `1px solid white`,
          width:'50%'}}>
          <Box className='absolute' sx={{top:'16%',pl:2}}>
                <Typography sx={{fontSize:'2em',fontWeight:900}}>
                  Latest From Blog
                </Typography>
              <BlogPostSlider/> 
          </Box>

        </Box>}  */}


</Box>

    <Container
    
    className={`flex navbar absolute center c50 between row justify-between items-center ${false ? 'bg' : ''}`} 
    sx={{
      
      width:{xs:'95%',sm:'90vw',md:'95%',lg:'1600px'},
      zIndex:12467,
      py:2,
      // border:'1px solid white',
      // minWidth:{lg:'90%'},
      boxShadow: '0 0 1rem 0 #00000012',
      backdropFilter: 'blur(10px)',
      border: isOpen ? '1px solid #ffffff21 ' : '1px solid transparent',
      backgroundColor: isOpen ? '#bdbdbd78 !Important' :'rgba(255, 255, 255, 0.15)',
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
            className={`img ${isOpen ? 'red-filter' : ''}`}
          />
        </Box>
        
      
        

        <Box 
        onClick={()=>router.push('/')}
        className='cent cursor pointer' sx={{width:{xs:'100px',md:'120px'},height:'50px'}}>
          <img 
           src="https://ucarecdn.com/882f100e-18b8-451c-9c53-5f75cd0c7a47/vm.png"
           
           alt="Vito Medlej Logo" className="img contain invert2 " />
        </Box>
        <Box>


        <Btn
      
      onClick={()=>
        navigate('/3d')}

    className="color2 bg2" sx={{
      display:{xs:'none',sm:'flex'},
      border:'1px solid transparent',
        ':hover':{color:'#550df4 !Important',
border:'1px solid #489fb5'

        },
        borderRadius:'900px',
        gap: 0, px:`0 !important`,mx:1 }}>
        <Box
        sx={{ width: '20px', height: '20px' }} className="invert2">
          <img src="https://cdn-icons-png.flaticon.com/128/2012/2012152.png" alt="" className="img" />
        </Box>
      </Btn>
        <Btn
      
          onClick={()=>
            ScrollToFn()}

        className="" sx={{
          border:'1px solid black',
            ':hover':{color:'#550df4 !Important'},
            borderRadius:'900px',
            gap: 1, px:{xs:0,md:2} }}>

            <Typography className='color2' sx={{
                display:{xs:'none',sm:'flex'},  
                fontSize: '.7em' }}>
              Hit me up
            </Typography>
            <Box
            sx={{ width: '20px', height: '20px' }} className="invert2">
              <img src="https://cdn-icons-png.flaticon.com/128/9314/9314363.png" alt="" className="img" />
            </Box>
          </Btn>

       

        </Box>
    </Container>
  
    </>

  )
}

export default Navbar