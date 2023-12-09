import React from 'react'
import { Box } from '@mui/system'
import { Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { PostCard } from './post-card'
import { Post } from '@/models'
type Props = {}

export function RecentPosts({}: Props) {
  const postList: Post[] = [
    {
      id: '1',
      title: 'UI Post Card',
      publishedDate: '1652260097040',
      tagList: ['Design', 'Pattern'],
      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    },
    {
      id: '2',
      title: 'UI Post Card',
      publishedDate: '1652260097040',
      tagList: ['Design', 'Pattern'],

      description:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    },
  ]

  return (
    <Box component="section" bgcolor={'secondary.light'} py={4}>
      <Container>
        <Stack
          direction="row"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">Recent Posts</Typography>
          <Link passHref href={'/blog'}>
            <MuiLink sx={{ display: { xs: 'none', md: 'inline' } }}>View all</MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            '& > div': {
              width: {
                sx: '100%',
                md: '50%',
              },
            },
          }}
          spacing={3}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
