"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Btn from '../Btn/Btn';

export default function Card({sx}: {sx?:any}) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      sx={{
        border: '1px solid #ffffff21',
        backgroundColor: 'rgb(12, 16, 33)',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '4px',
        ...sx,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        sx={{
          width: 300,
          height: 300,
          borderRadius: '50%',
          position: 'absolute',
          pointerEvents: 'none',
          transition: 'transform 0.1s ease, opacity 0.5s ease',
          background: 'radial-gradient(circle, rgba(221,221,221,0.4) 0%, rgba(221,221,221,0.1) 50%, rgba(221,221,221,0) 70%)',
          transform: `translate(${position.x - 100}px, ${position.y - 100}px)`,
          opacity: isHovered ? 0.3 : 0,
          zIndex: 1,
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 2, p: 3 }}>
        <Typography sx={{
          pointerEvents: 'none',
            
            fontWeight: 500 }} className="clr2">
          Mini Title
        </Typography>
        <Typography className="white" sx={{
          pointerEvents: 'none',
            
            fontSize: '2em', fontWeight: 700 }}>
          Mini Title
        </Typography>
        <Typography className="gray2" sx={{
          pointerEvents: 'none',
            
            fontSize: '.8em', fontWeight: 300 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ea nisi id quasi placeat autem?
        </Typography>
        <Box sx={{ mt: 2.5 }}>
          {[1, 2, 3].map((perk, index) => (
            <Box key={index} sx={{ gap: 1, my: 1.2 }} className="flex row items-center">
              <Box sx={{ width: '20px', height: '20px' }} className="">
                <img src="https://cdn-icons-png.flaticon.com/128/4315/4315445.png" alt="" className="img" />
              </Box>
              <Typography sx={{ 
          pointerEvents: 'none',
                
                fontSize: '.8em' }}>
                Lorem ipsum dolor sit amet.
              </Typography>
            </Box>
          ))}
        </Box>
        <Box className="flex end" sx={{ justifyContent: 'end', mt: 4, alignItems: 'flex-end' }}>
         
         
          <Btn className="pointer cursor" sx={{
            ':hover':{color:'red !Important'},
            gap: 1, border: '1px solid transparent !important' }}>
            <Typography sx={{
                
                fontSize: '.7em' }}>
              Secure Your Package
            </Typography>
            <Box sx={{ width: '20px', height: '20px' }} className="invert">
              <img src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png" alt="" className="img" />
            </Box>
          </Btn>
       
       
        </Box>
      </Box>
    </Box>
  );
}