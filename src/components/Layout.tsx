import React, { ReactNode, FC } from 'react'

import TopBar from './TopBar';
import PokemonTypesFilter from './PokemonTypesFilter';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className='flex flex-col h-screen dark:bg-[#131516]'>            
            <TopBar />
            <div 
                className='flex h-full overflow-y-scroll scrollbar-hide'
            >
                <div className='h-full mx-5 sticky top-0 overflow-y-scroll scrollbar-hide'>
                    <PokemonTypesFilter handleClick={() => null} />
                </div>
                <div className='w-full overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-gray-300'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;
