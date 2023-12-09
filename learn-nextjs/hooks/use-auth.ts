import { authApi } from '@/api-client'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

// Auth -> Protected Pages
// <Auth>{children} </Auth>

export function useAuth(option?: Partial<PublicConfiguration>) {
  // profile
  //

  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    revalidateOnFocus: false,
    // nên đặt biến trên file constant
    dedupingInterval: 60 * 60 * 100,
    ...option,
  })

  console.log('firstLoading', profile, error)

  const firstLoading = profile === undefined && error === undefined

  async function login() {
    await authApi.login({
      username: 'test1',
      password: '123123',
    })
    // nếu không có dữ liệu tạm gì hết thì cứ để trống
    // mutate()

    //  trong trường hợp có dữ liệu thì để
    // mudate({name:""}) để xài dữ liệu tạm trên ui

    // đợi để get lại  request profile
    await mutate()
  }
  async function logout() {
    await authApi.logout()

    // không gọi lại api và có thể đặt await
    await mutate(null, false)
  }

  return { profile, error, login, logout, firstLoading }
}
