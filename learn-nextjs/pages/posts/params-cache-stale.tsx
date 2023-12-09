import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'

export interface ParamsPageProps {
  query: any
  post: any
}

function ParamsCacheStale({ query, post }: ParamsPageProps) {
  const router = useRouter()
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((x) => {
        if (x > 60) clearInterval(intervalId)
        return x + 1
      })
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1> Params Page </h1>

      <br />

      <h2>{post?.title}</h2>
      <p>{post?.author}</p>
      <p>{post?.description}</p>
    </div>
  )
}

export default ParamsCacheStale

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate')

  const postId = context.params?.postId

  if (!postId) return { notFound: true }

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)

  const data = await response.json()

  return {
    props: {
      query: context.query,
      post: data,
    }, // will be passed to the page component as props
  }
}
