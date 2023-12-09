import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { avatar } from '../images'

type Props = {}

export function HeroSection({}: Props) {
  return (
    <Box component={'section'} pt={{ xs: 4, md: 18 }} pb={{ sx: 7, md: 9 }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
          spacing={8}
        >
          <Box>
            <Typography mb={{ xs: 3.5, md: 5 }} component={'h1'} variant="h3" fontWeight={700}>
              Hello John
            </Typography>
            <Typography mb={{ xs: 3.5, md: 5 }}>
              Cùng nhau làm thử UI cho phần hero section sử dụng MUI 5 nhé mn
            </Typography>
            <Button variant="contained" size="large">
              Download
            </Button>
          </Box>
          <Box
            sx={{
              minWidth: '240px',
              maxWidth: '240px',
              boxShadow: '-5px 13px',
              color: 'secondary.light',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <Image src={avatar} layout="responsive" alt="avatar" />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
