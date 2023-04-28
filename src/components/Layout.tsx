import React, { ReactNode, FC } from 'react'

import TopBar from './TopBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className='flex flex-col h-screen'>            
            <TopBar />
            <div className='h-full overflow-y-scroll scroll-smooth'>{children}</div>
        </div>
    )
}

export default Layout;
