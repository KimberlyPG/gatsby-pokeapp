import React, { useContext } from 'react'
import { SlMenu } from 'react-icons/Sl';
import { ToggleMenuContext } from '../context/toggleMenu.context';

export const ToggleTypesMenu = () => {
    const{show, setShow} = useContext(ToggleMenuContext);
    console.log(show)

    return (
        <SlMenu 
            className={`text-2xl mt-5 cursor-pointer xxs:flex sm:hidden dark:text-white
            ${show ? "mx-auto":"xxs:ml-auto xs:mx-auto"}`} 
            onClick={() => setShow(!show)} 
        />
    );
}
