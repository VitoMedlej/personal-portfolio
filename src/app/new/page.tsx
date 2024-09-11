// "use client"
// import { Box, Grid, Typography } from '@mui/material'
// import React, { useEffect } from 'react'
// import SMicons from '../Components/SMicons/SMicons'
// import Btn from '../Components/Btn/Btn'
// import GridProjects from '../Components/GridProjects/GridProjects'
// import Skills from '../Components/Skills/Skills'
// import Testimonials from '../Components/Testimonials/Testimonials'
// // import useLocomotiveScroll from '../Utils/useScroller'
// // import LocomotiveScroll from 'locomotive-scroll'
// import Scrollbar from 'smooth-scrollbar';
// import Footer from '../Components/Footer/Footer'
// import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'
// import { useParallaxEffect } from '../hooks/useParallex'
// import FullscreenLoader from '../Components/FullscreenLoader/FullscreenLoader'
// import Navbar from '../Components/Navbar/Navbar'




// const Page = () => {
  
//   useEffect(() => {
//     const isMobile = window.innerWidth <= 768; // Check if it's mobile based on width
//     const damping = isMobile ? 0.25 : 1;
//     const doc : any = document.querySelector('#my-scrollbar')
//     const scrollbar = Scrollbar.init(doc, {
//       damping,
//       thumbMinSize:20,
//       renderByPixels:true,
//       // alwaysShowTracks: true,
//       continuousScrolling: true,
//     });

//     return () => {
//       scrollbar.destroy();
//     };
//   }, []);
  
//   useParallaxEffect();

//   return (
//     <Box id='my-scrollbar'    className='bg' 
//     sx={{
      
//       height: '100vh',
//         overflowX: 'hidden',
//     }}
    
//     >

// <FullscreenLoader />

// <Navbar />
// <ScrollToTop />

//         <Grid   container>
//             <Grid     item xs={12} md={6} className='relative bg' lg={5} 
            
//             sx={{pt:{xs:8,md:4},height:{xs:'100%',md:'100vh'}}}>
//                 <Box sx={{pt:{xs:'5em',md:'20%'},
//                 pb:{xs:'5em',md:'0'},px:{xs:'.5em',md:'20%'},maxWidth:{md:'250px',lg:"300px"}}}>

//                 <Typography 
//                 className='center color2 auto flex items-center   justify-center align-center'
//                 sx={{
//                   lineHeight:'1.35',
//                   textAlign: {xs:'center',md:'left'},
//                   fontSize:{xs:'3.15em',md:'3.5em',lg:'4.5em'},fontWeight:900}}>
//                     MY NAME IS VITO MEDLEJ, WEB ENGINEER
//                 </Typography>


//                 {/* <Box className='rounded bg5  absolute center flex auto items-center ' 
//                 sx={{bottom:'10%',right:'50%',
//                   transform:'translateX(50%)',
//                   display:{xs:'flex',sm:'none'},
//                 width:'80px',height:'80px'}}>
//                     <Box className='' sx={{width:'35px',height:'35px'}}>

//                     <img src="https://cdn-icons-png.flaticon.com/128/5421/5421659.png" alt=""
//                      className="img invert" />
//                      </Box>
//                 </Box> */}

//                 </Box>

//                 <Box className='w100 absolute' sx={{
//                   display:{xs:'none',md:'flex'},
//                   bottom:0,
//                   height:{md:'100px'}}}>

//                 </Box>
//             </Grid>

//             <Grid  className='relative ' sx={{height:{xs:'100%',md:'100vh'}}} item xs={12} md={6} lg={7}>
//               <Box className='h100' sx={{px:{xs:2,md:0}}}>
              
//                 <img src="https://ucarecdn.com/61b4c768-9ec5-4b0c-9ae0-ebe7ab381f1d/anebike.jpg" alt="" className="img" />
//               </Box>
//               <Box className=' scale-reverse flex bg4 items-center center absolute' sx={{
//                   display:{xs:'none',md:'flex'},
//                   bottom:0,
//                   left:0,
//                   width:'300px',
//                   zIndex:10,
//                   height:{md:'100px'}}}>
//                     <SMicons invert/>
//                 </Box>
//             </Grid>
//         </Grid>


//         <Grid   container>
//           <Grid item xs={12} sx={{maxWidth:'lg',py:{xs:12,md:20}}}
//            className='auto white items-center w100 flex col center'>
//            <Box sx={{width:'100px',height:'100px',overflow:'hidden'}} className='rounded auto center'>
//             <img src="https://ucarecdn.com/be805fa6-ecca-4d06-a2b1-d28f6001c38c/-/resize/300/"
//              alt="" className="img rounded parallax-image" />
//            </Box>
//             <Typography component='h1'
//             className='color2 fade-in-text'
//             sx={{py:{xs:2,md:3},fontWeight:800,fontSize:{xs:'1.5em',md:'2em'}}}>
//               Hello There Stranger
//             </Typography>
//             <Typography component='p' className='text-center color3 fade-in-text' 
//             sx={{fontSize:{xs:'1em',md:'1.4em'},maxWidth:{xs:'500px',md:'800px'},
//             px:1
//             ,fontWeight:300}}>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim earum iste nisi velit officiis quam repellendus quae ad. Accusantium dignissimos facilis quis ducimus, sit voluptas?
//             </Typography>
//           </Grid>
//         </Grid>



//         <Grid   container>
//           <Grid item xs={12} sx={{maxWidth:'lg',py:{xs:8,md:12}}}
//            className='auto white row justify-evenly w100 flex  '>
//             <Box>
//             <Typography component='h1' className='fade-in-text text-center color2' sx={{
//               lineHeight:'0.8',
//             fontWeight:800,fontSize:{xs:'3.05em',md:'5em'}}}>
//              15+
//             </Typography>
//             <Typography component='h1' className='fade-in-text text-center color3' 
//             sx={{fontSize:{xs:'1.1em',md:'1.4em'},maxWidth:{xs:'500px',md:'800px'},fontWeight:300}}>
//              unique customers
//             </Typography>
//             </Box>

//             <Box>
//             <Typography component='h1' className='fade-in-text text-center color2' sx={{
//               lineHeight:'0.8',
//             fontWeight:800,fontSize:{xs:'3.05em',md:'5em'}}}>
//              15+
//             </Typography>
//             <Typography component='h1' className='fade-in-text text-center color3' 
//             sx={{fontSize:{xs:'1.1em',md:'1.4em'},maxWidth:{xs:'500px',md:'800px'},fontWeight:300}}>
//              unique customers
//             </Typography>
//             </Box>

//             <Box>
//             <Typography component='h1' className='fade-in-text text-center color2' sx={{
//               lineHeight:'0.8',
//             fontWeight:800,fontSize:{xs:'3.05em',md:'5em'}}}>
//              15+
//             </Typography>
//             <Typography component='h1' className='fade-in-text text-center color3' 
//             sx={{fontSize:{xs:'1.1em',md:'1.4em'},maxWidth:{xs:'500px',md:'800px'},fontWeight:300}}>
//              unique customers
//             </Typography>
//             </Box>

//           </Grid>
//         </Grid>






//         <Box
//            className='auto white  flex col '
        
//         sx={{maxWidth:'lg',py:{xs:12,md:20},px:2}}>
//           <Box 
//            className='auto white w100 flex col '
//            >
  
//             <Typography component='h1'
//             className='color2 fade-in-text'
//              sx={{pb:{xs:2,md:4},maxWidth:'600px',fontWeight:900,fontSize:{xs:'2.5em',md:'3em'}}}>
//             Designing a Better World Today
//             </Typography>
//           </Box>
//              <GridProjects/>


             
//              <Box sx={{py:4}}>
//       <Box className='flex row items-center'>
//     <Box className='bg4' sx={{height:'60px',width:'3px'}}>
//     </Box>
//     <Typography
//     className='color3 fade-in-text'
//     sx={{fontSize:'.8em',px:1}}>
//     {`We've been working for several years to build a portfolio that truly reflects our diversity.`}
//     </Typography>
    
//       </Box>
//     </Box>



//         </Box>

//         <Skills></Skills>

        
//         <Testimonials/>
//         <Box sx={{ overflowX: 'hidden' }}>
//         <Box  sx={{height:{xs:'100%',md:'700px'},mt:8,mx:'auto',px:0,py:{xs:16,md:4}}}
        
//         className='bg4 relative flex center text-center  items-center col'>

//             <Box sx={{width:{xs:'200px',md:'350px'},right:'-3%'
//             ,top:{xs:'-15%'}
//             ,height:{xs:'200px',md:'350px'}}}
//             className='absolute'
//             >
//               <img
//               src="https://static.vecteezy.com/system/resources/previews/028/615/543/non_2x/spiral-3d-curve-line-decorative-element-free-png.png" alt="" 
//               className="img contain parallex" />
//             </Box>

//             <Box sx={{width:{xs:'120px',md:'350px'},left:'-3%'
//             ,top:{xs:'-7%'}
//             ,height:{xs:'120px',md:'350px'}}}
//             className='absolute'
//             >
//               <img
//               src="https://ucarecdn.com/4bf01766-3cf3-40da-8936-9e2123a3116f/blueshape.webp" alt="" 
//               className="img contain parallex" />
//             </Box>



//           <Box className='flex col center items-center scale-reverse'>
//             <Box sx={{width:'25px',height:'25px'}}>
//               <img src="https://cdn-icons-png.flaticon.com/128/102/102649.png" alt="" className="img" />
//             </Box>
//               <Typography className='c'>
//                 Trusted by 100% of my clients 
//               </Typography>
//           </Box>
//           <Box className='scale-reverse' sx={{px:1}} >
//             <Typography sx={{fontSize:{xs:'2.6em',sm:'3.5em'},fontWeight:900}}>
//               LETS MAKE AN IMPACT TODAY 
//             </Typography>
//             <Typography className='auto' sx={{maxWidth:'600px',fontSize:{xs:'.9em',sm:'1.15em'},fontWeight:300}}>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ab tempora dolorem a, harum in?
//               </Typography>
//           </Box>
       
//         <Box className='bg4 absolute ' sx={{
//                   display:{xs:'none',md:'flex'},
//                   bottom:0,
//                   width:'100%',
//                   height:{md:'100px'}}}>
//                     <Box className='flex items-center' sx={{textAlign:'left',px:2,width:'50%'}}>
//                   <Typography className='color4' sx={{fontSize:'.8em'}}>
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                   </Typography>
//                     </Box>
                    
//                     <Box 
//                     className='bg5 flex center items-center' 
//                     sx={{width:'20%'}}>

//                     <Btn 
//                     sx={{width:'100%',boder:'1px solid white !important',color:'white',mx:2,height:'70px',borderRadius:'900px'}}>
//                       Get In Touch
//                     </Btn>
//                     </Box>

//                     <Box 

//                     sx={{background:'#d8d8d8',width:'30%'}}>

                  
//                     </Box>
//                 </Box>
//                 </Box>

//                 </Box>


//                 <Footer/>

//     </Box>
//   )
// }

// export default Page

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page