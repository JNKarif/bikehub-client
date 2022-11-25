import React from 'react';

const Category = ({brand}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={brand.categoryLogo} alt="Shoes" /></figure>
  <div className="card-body">
    
  </div>
</div>
        </div>
    );
};

export default Category;