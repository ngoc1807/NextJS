import { Post } from '@/models'
import { Card, CardContent, Divider, Typography, Stack } from '@mui/material'
import { format } from 'date-fns'
import React from 'react'

type Props = {
  post: Post
}

export function PostCard({ post }: Props) {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight={'blod'}>
          {post.title}
        </Typography>

        <Stack direction={'row'} my={2}>
          <Typography variant="body1" display="flex">
            {format(Number(post.publishedDate), 'dd MMM yyyy')}
          </Typography>
          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

          <Typography variant="body1" display="flex">
            {post.tagList.join(', ')}
          </Typography>
        </Stack>

        {/* <Typography variant="body1" my={2} sx={{display:'flex'}} > */}

        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  )
}
