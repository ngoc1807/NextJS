import React from 'react'
import { Box } from '@mui/system'
import { Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { PostCard } from './post-card'
import { Work } from '@/models'
import { WorkList } from '../work'
type Props = {}

export function FeatureWorks({}: Props) {
  const workListData: Work[] = [
    {
      id: '1',
      title: 'UI Post Card',
      createdAt: '1652260097040',
      updateAt: '1652260097040',
      tagList: ['Dashboard', 'Pattern'],
      shortDescription:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      fullDescription: '',
      thumbnailUrl:
        'https://i.picsum.photos/id/820/400/400.jpg?hmac=WhoAs8CHhLNtkM1dS997TtG6Kt4Tb2tAyDD9v2O97TU',
    },
    {
      id: '2',
      title: 'NextJS: 04-17 Featured works layout',
      createdAt: '1652260097040',
      updateAt: '1652260097040',
      tagList: ['Design', 'Pattern'],
      shortDescription:
        'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
      fullDescription: '',
      thumbnailUrl:
        'https://i.picsum.photos/id/279/400/401.jpg?hmac=CvhkszG9jo5qeOFojAbRrGo2LUyoXiqtFNLEx4kUE8Q',
    },
  ]

  return (
    <Box component="section" pt={2} py={4}>
      <Container>
        <Typography variant="h5">Feature Works</Typography>
        <WorkList workList={workListData} />
      </Container>
    </Box>
  )
}
