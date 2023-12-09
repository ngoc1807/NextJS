// import Header from '@/components/common/header'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
// import dynamic from 'next/dynamic'
import Header from '@/components/common/header'
import { AdminLayout, MainLayout } from '@/components/layout'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
interface Props {}

// const Header = dynamic(() => import('@/components/common/header'), { ssr: false })

const AboutPages = (props: Props) => {
  const router = useRouter()
  const [postList, setPostList] = useState([])

  console.log('About query', router.query)

  const page = router.query?.page
  // useEffect dưới đây chỉ chạy ở phía client
  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)

      const data = await response.json()

      setPostList(data.data)
    })()
  }, [page])

  function handleNextClick() {
    //  shadow
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        AboutPages
      </Typography>

      <Header />
      <ul className="post-list">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}> Next page </button>
    </Box>
  )
}

AboutPages.Layout = AdminLayout

export default AboutPages

export async function getStaticProps() {
  console.log('get static props')
  return {
    props: {},
  }
}

// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
