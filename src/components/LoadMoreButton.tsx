import React, { FC } from 'react';

interface LoadMoreButtonProps {
    typeSelected: string;
    hasMore: boolean
    handleLoadMore: () => void;
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({ typeSelected, hasMore, handleLoadMore }) => {
    return (
        <>
            {typeSelected === "all" && 
                <div className='flex w-full justify-center'>
                    {hasMore ? (
                        <button 
                        className='text-center text-white font-semibold my-5 bg-[#4DAD5B] py-1 px-2 rounded-md' 
                        onClick={() => handleLoadMore()}
                        >
                                Load More Pokemon
                        </button>
                    ) : (
                        <p className='w-full text-center my-5 text-gray-300'>No More Pokemon</p>
                        )}
                </div>
            }
        </>
    );
}

export default LoadMoreButton