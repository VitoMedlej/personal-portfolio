"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/material';
import ReviewsSectionMobile from './ReviewsSectionMobile';

export interface MyComponentProps {
  data: { title: string }[];
}

const MyComponent: React.FC<MyComponentProps> = ({ data }) => {
  return (
    <Box sx={{mt:{xs:0,sm:6},maxWidth:'lg'}} className='flex row wrap w100 '>
     <Box className='justify-evenly w100' sx={{display:{xs:'none',md:'flex'}}}>

      {data.slice(0,3).map((item, index) => (
        <Box 
        className='flex center col items-center justify-center' key={item?.title}>
          <Rating sx={{fontSize:'.8em'}} name="simple-controlled" value={5} readOnly />
          <Typography sx={{fontWeight:200,color:'#c8c8c8',maxWidth:'200px',fontSize:".8em"}} className='center text-center' variant="body1" >
            {`"${item.title}"`}
          </Typography>
        </Box>
      ))}
      </Box>

     <Box className='w100' sx={{display:{xs:'',md:'none'}}}>
     <ReviewsSectionMobile data={data.slice(0,6)}/>
     </Box>


    </Box>
  );
};

export default MyComponent;
