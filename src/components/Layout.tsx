import React, { ReactNode, FC } from 'react'

import TopBar from './TopBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='h-screen w-screen overflow-y-scroll scrollbar-hide'>
        <TopBar />
        <div className='h-full overflow-y-scroll'>{children}</div>
    </div>
  )
}

export default Layout;