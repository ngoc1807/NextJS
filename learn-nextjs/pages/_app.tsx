import axiosClient from '@/api-client/axios-client'
import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '@/models'
import { createEmotionCache, theme } from '@/utils'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { SWRConfig } from 'swr'
import '../styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  pageProps,
}: // emotionCache = clientSideEmotionCache // temp comment because it still work now
AppPropsWithLayout) {
  // console.log('app re-render')

  // if put line in here . MyApp will re-render when next page
  // it will add css every times render
  // const clientSideEmotionCache = createEmotionCache()
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        {/* đảm  bảo răng tất cá các css đồng nhất */}
        <CssBaseline />
        {/* shouldRetryOnError : fetch api thì nó sẽ thử retry lại */}
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
