import { useAuth } from '@/hooks'
import { LayoutProps } from '@/models/index'
import { Box } from '@mui/system'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Auth from '../common/auth'
import { Footer } from './footer'
import { HeaderAdmin } from './header-admin'

type Props = {}

const drawerWidth = 240

export function AdminLayout({ children }: LayoutProps) {
  const router = useRouter()
  const { profile, logout } = useAuth()
  useEffect(() => {
    console.log('AdminLayout mounting')
    return () => console.log('AdminLayout unmounting')
  }, [])

  async function handleLogoutClick() {
    try {
      await logout()
      console.log('redirect to login page')
      router.push('/login')
    } catch (error) {
      console.log('fail to logout', error)
    }
  }

  return (
    <Auth>
      <Box minHeight="100vh">
        <HeaderAdmin />
        {children}
        <Footer />
      </Box>
    </Auth>
  )
}
{
  /* <h1>AdminLayout layout</h1> */
}
{
  /* <div>Sidebar</div> */
}
{
  /* <p>{JSON.stringify(profile)}</p> */
}
{
  /* <button onClick={handleLogoutClick}>logout</button> */
}

{
  /* <Link href="/"> */
}
{
  /* <a> Home</a> */
}
{
  /* </Link> */
}
{
  /* <br /> */
}
{
  /* <Link href="/about"> */
}
{
  /* <a> About</a> */
}
{
  /* </Link> */
}

{
  /* <div>{children}</div> */
}
