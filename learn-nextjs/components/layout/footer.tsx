import { Box, Icon, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { Facebook, Google, Twitter, Instagram } from '@mui/icons-material'
type Props = {}

const Footer = (props: Props) => {
  const socialLinks = [
    { icon: Facebook, url: 'http://fb.com' },
    { icon: Instagram, url: 'http://google.com' },
    { icon: Twitter, url: 'http://twitter.com' },
    { icon: Google, url: 'http://google.com' },
  ]

  return (
    <Box component={'footer'} py={2} textAlign="center">
      <Stack direction="row" justifyContent={'center'}>
        {socialLinks.map((item, idx) => (
          <Box key={idx} component="a" m={3} href={item.url} target="_blank">
            <Icon fontSize="large" component={item.icon}></Icon>
          </Box>
        ))}
      </Stack>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  )
}

export { Footer }
