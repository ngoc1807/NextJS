import { Work } from '@/models'
import { Chip, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

type Props = {
  work: Work
}

export const WorkCard = ({ work }: Props) => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} my={3}>
      <Box width={{ xs: '100%', sm: '246px' }} flexShrink={0}>
        <Image
          src={work.thumbnailUrl}
          width={246}
          height={180}
          layout={'responsive'}
          alt="thumbnailUrl"
        />
      </Box>
      <Box>
        <Typography variant="h4" fontSize="bold">
          {work.title}
        </Typography>

        <Stack direction={'row'} my={2}>
          <Chip color="secondary" label={work.createdAt} size="small" />
          <Typography ml={3}>{work.tagList.join(', ')}</Typography>
        </Stack>

        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  )
}
