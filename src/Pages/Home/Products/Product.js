import React from 'react';

const Product = ({bike, setBikeModel}) => {
    const {name, original_price, resell_price, location, seller_name, posting_time,image, years_of_use}=bike
    return (
        <div>
             <div className='my-10'>
          
           <div className="card lg:w-96 h-[600px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 ">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Original Price: {original_price}</p>
    <p>Resell Price: {resell_price}</p>
    <p>Years of use: {years_of_use}</p>
    <p>Seller Name: {seller_name}</p>
    <p>Location: {location}</p>
    <p>Date of Posting: {posting_time}</p>
    <div className="card-actions">
      
      <label htmlFor="booking-modal" 
      className="btn btn-primary"
      onClick={()=>setBikeModel(bike)}
      >Book Now</label>
    </div>
  </div>
</div> 
        </div>
        </div>
    );
};

export default Product;