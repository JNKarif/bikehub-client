import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({brand}) => {
    return (
        <div className='p-6'>
            <Link to='/login'>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={brand.categoryLogo} alt="Shoes" /></figure>
  <div className="card-body">
    
  </div>
  
</div>
  </Link>
        </div>
    );
};

export default Category;