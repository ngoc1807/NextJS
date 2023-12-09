import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

interface PostDetailProps {
  post: any
}

const PostDetailPages = ({ post }: PostDetailProps) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div> Loading </div>
  }

  if (!post) return null
  return (
    <div>
      PostDetailPages
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  )
}

export default PostDetailPages

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')

  const data = await response.json()

  return {
    // truyền vào trong pass bao nhiều item thì nó sẽ gọi getStaticProps bấy nhiêu lần
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<PostDetailProps> = async (
  context: GetStaticPropsContext
) => {
  console.log(' \n static props', context.params?.postId)

  const postId = context.params?.postId

  if (!postId) return { notFound: true }

  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)

  const data = await response.json()
  // console.log('data aaa', data)
  return {
    props: {
      post: data,
    },
    revalidate: 5,
  }
}
