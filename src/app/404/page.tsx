"use client"
import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <Box>
        {
            `
            OOPS! This page was not found, or was removed. Either way, let's go back to home page:
            `
        }
        <Link href='/'>
                Home
        </Link>
    </Box>
  )
}

export default Page