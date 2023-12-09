import { Box, Container, Link as MuiLink, Stack } from '@mui/material'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { ROUTE_LIST } from './routes'
type Props = {}

const HeaderDesktop = (props: Props) => {
  const router = useRouter()

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            // Mui link is a component and not a tag a => passHref
            <Link key={route.path} href={route.path} passHref>
              {/*  khi router.pathname === route.path thi classname se co them thang active */}
              <MuiLink sx={{ ml: 2 }} className={clsx({ active: router.pathname === route.path })}>
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default HeaderDesktop
