import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center mt-20'>
            <div class="flex justify-center items-center">
                <div class="spinner-border text-yellow-500 animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;