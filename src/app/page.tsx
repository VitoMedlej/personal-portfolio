"use client"

import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Btn2 from './Components/Btn/Btn2'
import Hero from './Components/Hero/Hero'
import ReviewSection from './Components/Reviews/ReviewSection'
import Portfolio from './Components/Portfolio/Portfolio'
import Skills from './Components/Skills/Skills'
import Pricing from './Components/Pricing/Pricing'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Index = () => {
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
  let [gradientStop,setGradientStop] = useState(63)
  let handleMouseMove = (event : any) => {
    let gradientStop = 70 + (event.clientX + event.clientY) / (window.innerWidth + window.innerHeight) * 30;
    setGradientStop(Number(gradientStop.toFixed(2)))
  }


  return (
    <>
    
    <Box
    onMouseMove={handleMouseMove}
    className='trans1 col flex ' sx={{

      backgroundImage:{xs:'radial-gradient(circle at 50% 21%, rgba(17, 24, 65, 43.55), #000 30%)',
      sm:'radial-gradient(circle at 50% -15%, rgba(17, 24, 65, 43.55), #000 65%)',
      md:'radial-gradient(circle at 50% -23%, rgba(17, 24, 65, 43.55), #000 65%)'},
      // backgroundImage: `radial-gradient(circle at 50% -1%, rgba(30, 4, 88, .55), #000 7%)`
      // background: 'rgb(6,6,74)',
      // background: `radial-gradient(circle, rgba(6,6,74,1) 0%, rgba(0,0,47,1) ${gradientStop}%, rgba(0,0,57,1) 100%)`
    }}>
          <Hero/>

        {/* <Divider sx={{border:'1px solid #ffffff0a'}} className='w100 white'></Divider> */}


    <Grid container className='flex  auto' sx={{
      zIndex:'10',
      maxWidth:'lg',
      pt:{xs:15},
      // minHeight:'100vh',
      // height:'1500px',

      background:'black'
      
      }}>
     
     
   


     
        {/* <Grid item xs={12} md={6}>

        <Box 
        sx={{
          py:{xs:0,sm:0},
          height:{xs:'100%',sm:'500px'},
          // width:{xs:'90%',sm:'48%'}
        }}
          >
      <img 
      src='https://elvito.netlify.app/_ipx/w_1080,q_75/https%3A%2F%2Fucarecdn.com%2F150b60a1-4ef3-4ec8-8f1a-d90a7ea26c85%2F-%2Fcrop%2F1129x1256%2F0%2C194%2F-%2Fpreview%2F3000x3000%2F?url=https%3A%2F%2Fucarecdn.com%2F150b60a1-4ef3-4ec8-8f1a-d90a7ea26c85%2F-%2Fcrop%2F1129x1256%2F0%2C194%2F-%2Fpreview%2F3000x3000%2F&w=1080&q=75'
      // src="https://ucarecdn.com/9da2ff49-00f9-49b5-ae97-737b37046d0b/ane1edited.jpg"
      alt="" className="img contain" />
        </Box>
      </Grid> */}


      <Grid sx={{px:1}} item xs={12} md={5.5} >

        <Box sx={{maxWidth:{sm:'90%',md:'95%',lg:'600px'}}}
        
        className='white auto center  justify-center h100 flex col'>
<Typography sx={{
  textAlign:{xs:'center',md:'left'},
  pt:{xs:2,sm:2,md:0},
  fontWeight:700,fontSize:{xs:'3em',sm:'2.5em',md:'3em'},pb:.42}}>
{`A Bit About Me: I'm Vito Medlej`}

</Typography>
      
          <Typography sx={{
  textAlign:{xs:'center',md:'left'},
              pt:.5,
            fontWeight:200,fontSize:{xs:'.9em',sm:'.85em',md:'1em'}}}>
              {
                `
                I have over 3 years experience with building fullstack apps,
                 primarily for Lebanon-based businesses
                
                using the best & latest technologies like Typescript + Nextjs to 
                deliver top level software solutions.

                 
                `
              }
          </Typography>

          <Typography sx={{
  textAlign:{xs:'center',md:'left'},
            
            fontWeight:200,fontSize:{xs:'.9em',sm:'.85em',md:'1em'}}}>
              {
                `
                Coding gives me sense of purpose and not just a job for me, it's the thing I'd do even if I had all the money in the world.

                `
              }
          </Typography>
        </Box>
      </Grid>


      <Grid
                    sx={{
                    my: {
                        xs: '3.5em',
                        sm: '4em',
                        lg: '1em'
                    },
                    pt: {
                        sm: '1em',
                        md: '2em',
                        lg: '0em'
                    },
                    display: 'flex',
                    alignItems: 'baseline',
                    
                    justifyContent: {xs:'center',md:'flex-end'}
                }}
                    item
                    xs={12} md={6}
                    // xs={12}
                    // sm={12}
                    // md={12}
                    // lg={5}
                    
                    >
                    <Box
                        sx={{
                        borderRadius: '6px',
                        width: {
                            xs: '100%',
                            sm: '350px',
                            md: '400px'
                        }
                    }}>
                        <Box
                            className='mainBox'
                            sx={{
                            opacity: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            height: '460px',
                            boxShadow: {
                                xs: '.5em 3em 0 #0c1021 ',
                                sm: '2em 3em 0px #0c1021'
                            }
                        }}>

                            <img

                            
                            // layout='fill'

                                style={{
                                opacity: 1,
                                borderRadius: '6px',
                                zIndex: '2'
                            }}
                                className='img cover'
                                src={`https://ucarecdn.com/150b60a1-4ef3-4ec8-8f1a-d90a7ea26c85/-/crop/1129x1256/0,194/-/preview/3000x3000/`}
                                alt="Personal Image"/>
                            <Box
                                className='gradientBg absolute'
                                sx={{
                                width: '100px',
                                height: '100px',
                                zIndex: '0',
                                position: 'absolute',
                                right: {
                                    xs: '0%',
                                    sm: '-5%',
                                    md:'-8%'
                                },
                                opacity: 1,
                                bottom: '-5%',
                                background: 'transparent',
                                backgroundImage: 'radial-gradient(white 2px, transparent 0)',
                                backgroundSize: '15px 13px'
                            }}></Box>
                            <Box
                                className='quoteBox '
                                sx={{
                                zIndex: '2',
                                border: '1px solid #ffffff21 ',
                                backgroundColor: '#550df4 !Important',
                                position: 'absolute',
                                bottom: {
                                    xs: '0%',
                                    lg: '-5%'
                                },
                                width: {sm:'100%'},
                                height: 'fit-content',

                                right: {
                                    sm: '25%'
                                },
                                top: {xs:'81%',sm:'89%',lg:'83%'},
                                overflow: 'hidden',
                                opacity: 1,
                                background: '#0092ff'
                            }}>
                                <Typography

                                component='h1'
                                    sx={{
                                      color:'white',
                                      fontWeight: '300',
                                    fontSize: '.85em',
                                    padding: '1em'
                                }}>
{`"Many ideas grow better when transplanted into another mind than the one where they sprang up."

– Oliver Wendell Holmes`}
                                </Typography>

                            </Box>

                        </Box>

                    </Box>
                {/* </Grid> */}

            </Grid>
    </Grid>
    <Box sx={{
          backgroundColor: 'black',
           zIndex:'10',
          pt:8,
          pb:4,
          }}>
        <div className="custom-br">
      <div className="left-edge"></div>
      <div className="right-edge"></div>
    </div>
        </Box>



    <Portfolio/>
        <Box sx={{
          backgroundColor: 'black',
           zIndex:'10',
          pt:6}}>
        <div className="custom-br">
      <div className="left-edge"></div>
      <div className="right-edge"></div>
    </div>
        </Box>


          <Box sx={{
            background: `rgb(85,13,244), radial-gradient(circle, rgba(85,13,244,1) 0%, rgba(15,2,45,1) 0%, rgba(24,8,57,1) 15%, rgba(25,13,52,1) 33%, rgba(0,0,0,1) 100%)`,
          
            zIndex:12,
          }}>

        <Skills/>

      
          </Box>



          
        </Box>
        <Box 
        className='auto flex center justify-center'
        sx={{
          backgroundColor: 'black',
           zIndex:'10',
          pt:0,
          margin:0
          }}>
        <div className="custom-br">
      <div className="left-edge"></div>
      <div className="right-edge"></div>
    </div>
        </Box>

          <Pricing/>
          <Box 
        className='auto flex center justify-center'
        sx={{
          backgroundColor: 'black',
           zIndex:'10',
          pt:0,
          margin:0
          }}>
        <div className="custom-br">
      <div className="left-edge"></div>
      <div className="right-edge"></div>
    </div>
        </Box>
        
        
        <Testimonials/>
        <Box 
        className='auto flex center justify-center'
        sx={{
          backgroundColor: 'black',
           zIndex:'10',
          pt:0,
          margin:0
          }}>
        <div className="custom-br">
      <div className="left-edge"></div>
      <div className="right-edge"></div>
    </div>
        </Box>

        <Contact/>


        <Box sx={{
          backgroundColor: 'black',
           zIndex:'10',
          pt:4,
          pb:2,
          }}>
        <div className="custom-br">
      <div className="left-edge"></div>
      <div className="right-edge"></div>
    </div>
        </Box>

        <Grid container className='flex  center auto' sx={{
        // zIndex:'10',
        px:2,
        backgroundImage:'radial-gradient(circle at 50% 00%, rgba(17, 24, 65, 43.55), #000 0%)',
        background:'radial-gradient(circle at 50% 0%, rgba(17, 24, 65, 33.55), #000 0%)',
        // background:'#090d22 !Important',
      // backgroundImage:'radial-gradient(circle at 50% 50%, rgba(17, 24, 65, 43.55), #000 90%)',
        
        }}>


        <Footer/>
        </Grid>

          </>


  )
}

export default Index