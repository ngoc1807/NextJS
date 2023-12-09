import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

interface PostListPageProps {
  posts: any[]
}

const PostListPage = ({ posts }: PostListPageProps) => {
  console.log('posts', posts)
  return (
    <div>
      <h1>PostListPage</h1>

      <ul>
        {posts?.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostListPage

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  //  chạy phía server-side
  // run luc build-time

  console.log('static props')

  // request 1 lần thì nó 1 chạy 1 lần (dev)
  // chỉ chạy lúc build (production)

  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')

  const data = await response.json()
  // console.log('data aaa', data)
  return {
    props: {
      posts: data.data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  }
}
