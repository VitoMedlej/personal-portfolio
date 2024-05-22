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
                ,href:`https://www.instagram.com/vito_mdlj/`
            },
            {
                img:`https://cdn-icons-png.flaticon.com/128/2111/2111432.png`
                ,href:`https://github.com/VitoMedlej?tab=overview&from=2024-05-01&to=2024-05-21`
            },
            {
                img:`https://cdn-icons-png.flaticon.com/128/1384/1384014.png`
                ,href:``
            },
            {
                img:`https://cdn-icons-png.flaticon.com/128/6244/6244710.png`
                ,href:`mailto:hello@vito-medlej.com`
            },
            
            {
                img:`https://cdn-icons-png.flaticon.com/128/909/909263.png`
                ,href:``
            },
            

        ].map(link=>{
            return <a
            target='_blank'
            
            key={link.img} href={`${link.href}`}>

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