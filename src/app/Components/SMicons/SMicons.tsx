"use client"
import { Box } from '@mui/material'
import React from 'react'

const SMicons = () => {
  return (
    <Box sx={{my:2,gap:2}} className='flex row center'>
    {

        [
            {
                img:`https://cdn-icons-png.flaticon.com/128/3670/3670274.png`
                ,href:``
            },
            {
                img:`https://cdn-icons-png.flaticon.com/128/2111/2111432.png`
                ,href:``
            },
            {
                img:`https://cdn-icons-png.flaticon.com/128/1384/1384014.png`
                ,href:``
            },
            {
                img:`https://cdn-icons-png.flaticon.com/128/6244/6244710.png`
                ,href:``
            },
            
            {
                img:`https://cdn-icons-png.flaticon.com/128/909/909263.png`
                ,href:``
            },
            

        ].map(link=>{
            return <a key={link.img} href={``}>

            <Box sx={{width:'30px'}}>
                <img src={link?.img} alt="" className="img invert" />
            </Box>
            </a> 
        })
    }
    </Box> 
  )
}

export default SMicons