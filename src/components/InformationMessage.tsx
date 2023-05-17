
import React from 'react'
import MessageImg from "../assets/pikachu.png"

const InformationMessage = () => {
    return (
        <div className='flex w-full h-1/2 mt-10 flex-col justify-center items-center space-y-2'>
            <div className='flex border rounded-sm p-5 justify-center items-center'>
                <p className='text-gray-600 dark:text-white text-center text-2xl'>
                    There are no pokemon of this type in this generation
                </p>
                <img 
                    className='w-28'
                    src={MessageImg} 
                    alt="pikachu image" 
                />
            </div>
        </div>
    );
}

export default InformationMessage