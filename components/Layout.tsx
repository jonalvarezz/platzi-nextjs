import React, { PropsWithChildren } from 'react'
import Navbar from '@components/Navbar/Navbar'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
    <footer />
  </>
)

export default Layout
