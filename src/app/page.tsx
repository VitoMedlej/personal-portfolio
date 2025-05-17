"use client"
import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import SMicons from './Components/SMicons/SMicons'
import Btn from './Components/Btn/Btn'
import GridProjects from './Components/GridProjects/GridProjects'
import Skills from './Components/Skills/Skills'
import Testimonials from './Components/Testimonials/Testimonials'
// import useLocomotiveScroll from './Utils/useScroller'
// import LocomotiveScroll from 'locomotive-scroll'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import { useParallaxEffect } from './hooks/useParallex'
import FullscreenLoader from './Components/FullscreenLoader/FullscreenLoader'
import { useRouter } from 'next/navigation'
import CTA from './Components/CTA/CTA'


const Page = () => {
  
  
  useParallaxEffect();
  const router = useRouter()
  return (


    <>
<FullscreenLoader />
    
    <Box     className='bg' 
    sx={{
      
      // height: '100vh',
        // overflowX: 'hidden',
    }}
    
    >


{/* <Navbar /> */}
<ScrollToTop />

        <Grid sx={{maxWidth:'xl'}}   className='auto' container>
            <Grid     item xs={12} md={6} className='relative ' lg={6} 
            
            sx={{
              pt:{xs:8,md:4},height:{xs:'100%',lg:'100%',xl:'700px'}}}>


                <Box
                className=' flex items-center   justify-center col align-center'
                
                
                sx={{
                  
                  pt:{xs:'5em',sm:'10%',md:'20%',lg:'10%',xl:'0%'},
                  height:{xs:'100%',md:'600px'},
                pb:{xs:'0em',sm:'0em',md:'0'},px:{xs:'.5em',md:'20%'},maxWidth:{md:'450px',lg:"450px"}}}>

                <Typography 
                className='center color2 auto flex items-center   justify-center align-center'
                sx={{
                  lineHeight:'1.35',
                  textAlign: {xs:'center',md:'left'},
                  fontSize:{xs:'2.55em',md:'2.95em',lg:'3.55em'},fontWeight:900}}>
                    MY NAME IS VITO MEDLEJ, WEB ENGINEER
                </Typography>
                  <Box sx={{height:'120px',mt:{md:2}, mx:{xs:'auto'}, 
                  justifyContent: {xs:'center',md:'left'},
           
                  alignItems:{xs:'center',md:'left'}}} className='flex '>

                <a target='_blank' href='mailto:contact@vito-medlej.com'>
  <Btn sx={{ width: { xs: '140px', sm: 'auto' }, color: 'black' }}>
    Contact
    <Box sx={{ width: '30px', height: '30px' }}>
      <img src="https://cdn-icons-png.flaticon.com/128/16015/16015161.png" alt="" className="img cover" />
    </Box>
  </Btn>
</a>
                  <Btn
                  onClick={()=>router.push('/work')}
                  sx={{py:1.1,px:2,ml:{xs:2}}}>
                    My Work
                  </Btn>
                  </Box>

                {/* <Box className='rounded bg5  absolute center flex auto items-center ' 
                sx={{bottom:'10%',right:'50%',
                  transform:'translateX(50%)',
                  display:{xs:'flex',sm:'none'},
                width:'80px',height:'80px'}}>
                    <Box className='' sx={{width:'35px',height:'35px'}}>

                    <img src="https://cdn-icons-png.flaticon.com/128/5421/5421659.png" alt=""
                     className="img invert" />
                     </Box>
                </Box> */}

                </Box>

                <Box className='w100 absolute' sx={{
                  display:{xs:'none',md:'flex'},
                  bottom:0,
                  height:{md:'100px'}}}>

                </Box>
            </Grid>

            <Grid  className='relative flex items-center ' sx={{
              overflow: 'hidden',
              height:{xs:'100%',md:'100vh',xl:'700px'}}} item xs={12} md={6} lg={6}>
             
             
             <Box
              className='center auto floating-box'
              sx={{
                width:{xs:'400px',sm:'500px',md:'600px',lg:'700px'},
                height:{xs:'400px',sm:'500px',md:'600px',lg:'700px'},
                // right:0,

                // top:0,
                // position:'absolute',
                transform:'rotate(5deg)',
                px:{xs:2,md:0}}}>
              
                <img src="https://ucarecdn.com/33aa3383-e822-4151-9d2b-f439380980c6/OIG21.png" alt="" className="img contain" />
              </Box>
              {/* <Box
              className='flex center auto'
              sx={{
                width:'400px',
                height:'400px',
                px:{xs:2,md:0}}}>
              
                <img src="https://d2pas86kykpvmq.cloudfront.net/landings/inflatable/hero-2-p-500.png" alt="" className="img contain" />
              </Box> */}
              <Box className='  flex bg4 items-center center absolute' sx={{
                  display:{xs:'none',md:'flex'},
                  bottom:0,
                  left:0,
                  width:'300px',
                  zIndex:10,
                  height:{md:'100px'}}}>
                    <SMicons invert/>
                </Box>
            </Grid>
        </Grid>


        <Grid  id='About' container>
          <Grid item xs={12} sx={{maxWidth:'lg',py:{xs:12,md:20}}}
           className='auto white items-center w100 flex col center'>
           <Box sx={{width:'100px',height:'100px',overflow:'hidden'}} className='rounded auto center'>
            <img src="https://wavescode8cdn.sirv.com/1737233350805.jpg?w=700"
             alt="vito-medlej  pic" className="img rounded parallax-image" />
           </Box>
            <Typography component='h1'
            className='color2 fade-in-text'
            sx={{py:{xs:2,md:3},fontWeight:800,fontSize:{xs:'1.5em',md:'2em'}}}>
              Hello There Stranger!
            </Typography>
            <Typography component='p' className='text-center color3 fade-in-text' 
            sx={{fontSize:{xs:'1em',md:'1.4em'},maxWidth:{xs:'500px',md:'800px'},
            px:1
            ,fontWeight:300}}>
              {`Im Vito, I can help you code complex software and applications from design concept to a completed, polished and professional product. Including maintaining and updating it.`}
            </Typography>
          </Grid>
        </Grid>



        <Grid   container>
          <Grid item xs={12} sx={{maxWidth:'lg',py:{xs:8,md:12}}}
           className='auto white row justify-evenly w100 flex  '>
            <Box>
            <Typography component='h1' className='fade-in-text text-center color2' sx={{
              lineHeight:'0.8',
            fontWeight:800,fontSize:{xs:'3.05em',md:'5em'}}}>
             50+
            </Typography>
            <Typography component='h1' className='fade-in-text text-center color3' 
            sx={{pt:.35,fontSize:{xs:'1.1em',md:'1.4em'},maxWidth:{xs:'500px',md:'800px'},fontWeight:300}}>
             Websites & Apps
            </Typography>
            </Box>

            <Box>
            <Typography component='h1' className='fade-in-text text-center color2' sx={{
              lineHeight:'0.8',
            fontWeight:800,fontSize:{xs:'3.05em',md:'5em'}}}>
             42+
            </Typography>
            <Typography component='h1' className='fade-in-text text-center color3' 
            sx={{pt:.35,fontSize:{xs:'1.1em',md:'1.4em'},maxWidth:{xs:'500px',md:'800px'},fontWeight:300}}>
             Unique Customers
            </Typography>
            </Box>

            <Box>
            <Typography component='h1' className='fade-in-text text-center color2' sx={{
              lineHeight:'0.8',
            fontWeight:800,fontSize:{xs:'3.05em',md:'5em'}}}>
             4+
            </Typography>
            <Typography component='h1' className='fade-in-text text-center color3' 
            sx={{pt:.35,fontSize:{xs:'1.1em',md:'1.4em'},maxWidth:{xs:'500px',md:'800px'},fontWeight:300}}>
             Years of Experience
            </Typography>
            </Box>

          </Grid>
        </Grid>






        <Box
           className='auto white  flex col '
        
        sx={{maxWidth:'lg',py:{xs:12,md:20},px:2}}>
          <Box 
           className='auto white w100 flex col '
           >
  
            <Typography component='h1'
            className='color2 fade-in-text'
             sx={{pb:{xs:2,md:4},maxWidth:'600px',fontWeight:900,fontSize:{xs:'2.5em',md:'3em'}}}>
            Designing a Better World Today (My Work)
            </Typography>
          </Box>
             <GridProjects/>


             
             <Box sx={{py:4}}>
      <Box className='flex row items-center'>
    <Box className='bg4' sx={{height:'60px',width:'3px'}}>
    </Box>
    <Typography
    className='color3 fade-in-text'
    sx={{fontSize:'.8em',px:1}}>
{
  `
  I have been growing my portfolio for the past 4 years, worked on various projects. More on my github.
  `
}
    </Typography>
    
      </Box>
    </Box>



        </Box>

        <Skills></Skills>

        
        <Testimonials/>
      
      <CTA/>

    </Box>


    </>

  )
}

export default Page
