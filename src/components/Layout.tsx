import React, { ReactNode, FC } from 'react'

import TopBar from './TopBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <div className='flex flex-col h-screen dark:bg-[#131516]'>            
            <TopBar />
            <div 
                className='flex h-full w-screen overflow-y-scroll scrollbar-hide'
            >
                {children}
            </div>
        </div>
    )
}

export default Layout;
