import React from 'react'
import HeaderDesktop from './header-desktop'
import HeaderMobile from './header-mobile'

type Props = {}

export function Header({}: Props) {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  )
}
