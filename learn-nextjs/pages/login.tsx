import { authApi } from '@/api-client'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

type Props = {}

const LoginPages = (props: Props) => {
  const { profile, login, logout } = useAuth({
    // ở login page với thì mới vòa k cần gọi
    revalidateOnMount: false,
  })
  const router = useRouter()
  async function handleLoginClick() {
    try {
      await login()

      console.log('redirect to dashboard')
      router.push('/dashboard')
    } catch (error) {
      console.log('fail to login', error)
    }
  }
  async function handleGetProfileClick() {
    try {
      // await getProfile()
    } catch (error) {
      console.log('fail to get profile', error)
    }
  }
  async function handleLogoutClick() {
    try {
      await logout()
      console.log('redirect to login page')
    } catch (error) {
      console.log('fail to logout', error)
    }
  }

  return (
    <div>
      <h1>LoginPages</h1>
      <p>Profile:{JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
      <button
        onClick={() => {
          router.push('/about')
        }}
      >
        Go to about
      </button>
    </div>
  )
}

export default LoginPages
