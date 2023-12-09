import { Work } from '@/models'
import { Box, Divider } from '@mui/material'
import React, { Fragment } from 'react'
import { WorkCard } from './work-card'

type Props = {
  workList: Work[]
}

export function WorkList({ workList }: Props) {
  if (workList.length === 0) return null

  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work}></WorkCard>
          <Divider />
        </Fragment>
      ))}
    </Box>
  )
}
