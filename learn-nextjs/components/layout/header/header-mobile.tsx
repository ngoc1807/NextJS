import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ViewListIcon from '@mui/icons-material/ViewList'
import { Link as MuiLink } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import clsx from 'clsx'
import * as React from 'react'
import Link from 'next/link'
import { ROUTE_LIST } from './routes'
import { useRouter } from 'next/router'
type Props = {}

const HeaderMobile = (props: Props) => {
  const [state, setState] = React.useState<boolean>(false)
  const router = useRouter()
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState(open)
  }

  const list = () => (
    <Box
      sx={{ width: '250px' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {ROUTE_LIST.map((route, index) => (
          <Link key={route.path} href={route.path} passHref>
            {/*  khi router.pathname === route.path thi classname se co them thang active */}
            <MuiLink sx={{ ml: 2 }} className={clsx({ active: router.pathname === route.path })}>
              <ListItem button key={route.path}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={route.label} />
              </ListItem>
            </MuiLink>
          </Link>
        ))}
      </List>
      <Divider />
    </Box>
  )
  return (
    <Box display={{ xs: 'block', md: 'none' }} textAlign="right">
      <React.Fragment key={'right'}>
        <Button onClick={toggleDrawer(true)}>
          <ViewListIcon />
        </Button>
        <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </Box>
  )
}

export default HeaderMobile
