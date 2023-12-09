import { LayoutProps } from '@/models/index'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { Footer, Header } from '.'

type Props = {}

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('mainLayout mounting')
    return () => console.log('MainLayout unmounting')
  }, [])

  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Stack>
  )
}
