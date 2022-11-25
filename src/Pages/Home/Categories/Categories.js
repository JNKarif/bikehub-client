import React from 'react';
import honda from '../../../Assets/Images/Honda-Logo.wine.svg'
import yamaha from '../../../Assets/Images/Yamaha-Logo.wine.svg'
import suzuki from '../../../Assets/Images/Suzuki-Logo.wine.svg'
import Category from './Category';

const Categories = () => {

    const categoriesData = [
        {
            id: 1,
            cateogoryName: 'Yamaha',
            categoryLogo: honda
        },
        {
            id: 2,
            cateogoryName: 'Yamaha',
            categoryLogo: yamaha
        },
        {
            id: 3,
            cateogoryName: 'Yamaha',
            categoryLogo: suzuki
        },
    ]

    return (
        <div className='my-10'>
            <p className='text-3xl text-center font-semibold text-secondary' >Product Categories</p>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2'>
           {
                categoriesData.map(brand=><Category 
                    key={brand.id}
                    brand={brand}
                    ></Category>)
            }
           </div>
        </div>
    );
};

export default Categories; 