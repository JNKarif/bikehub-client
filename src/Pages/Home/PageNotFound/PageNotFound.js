import React from 'react';
import PageNotFoundImage from '../../../Assets/Images/404-image.jpg'

const PageNotFound = () => {
    return (
        <div className='flex justify-center my-20'>
           <img className='h-96' src={PageNotFoundImage} alt=""/>
        </div>
    );
};

export default PageNotFound;