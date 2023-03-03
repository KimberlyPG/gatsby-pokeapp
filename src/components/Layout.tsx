import React, { ReactNode, FC } from 'react'

import Topbar from './Topbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
        <Topbar />
        {children}
    </div>
  )
}

export default Layout;