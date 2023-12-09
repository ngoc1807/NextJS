import { useAuth } from '@/hooks'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'

export interface AuthProps {
  children: any
}

const Auth = ({ children }: AuthProps) => {
  const { profile, firstLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    //@ts-ignore
    if (!firstLoading && !profile?.username) router.push('/login')
    return () => {}
  }, [router, profile, firstLoading])

  //@ts-ignore
  if (!profile?.username) return <p> Loading ... </p>

  return <div>{children}</div>
}

export default Auth
