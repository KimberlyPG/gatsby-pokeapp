import React, { useContext } from 'react'
import { SlMenu } from 'react-icons/sl';
import { ToggleMenuContext } from '../context/toggleMenu.context';

export const ToggleTypesMenu = () => {
    const{show, setShow} = useContext(ToggleMenuContext);
    return (
        <div className='flex'>
            <p className={`flex gray-300 items-center sm:w-full sm:justify-center text-gray-400 dark:text-gray-300 px-2
                ${show && "xxs:hidden sm:flex"}`}>
                <span className='xxs:hidden sm:flex sm:mr-1'>Select</span>Type
            </p>
            <SlMenu 
                className={`text-2xl cursor-pointer xxs:flex sm:hidden dark:text-white
                ${show ? "mx-auto":"xxs:ml-auto xs:mx-auto"}`} 
                onClick={() => setShow(!show)} 
            />
        </div>
    );
}
