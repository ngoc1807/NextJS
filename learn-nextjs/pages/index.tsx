import { FeatureWorks, HeroSection, RecentPosts } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import { NextPageWithLayout } from '../models'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  const gotoDetailPages = () => {
    router.push({
      pathname: 'posts/[postId]',
      query: {
        postId: 123,
        ref: 'social',
        abc: 'abc',
      },
    })
  }

  return (
    <Box>
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
