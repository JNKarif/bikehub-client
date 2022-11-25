import React from 'react';

const Banner = () => {
    return (

<div className="hero bg-base-200 my-5">
  <div className="hero-content flex-col flex justify-evenly lg:flex-row">
    <img  src="https://images.unsplash.com/photo-1625043484550-df60256f6ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    alt='' className=" w-1/2  " />
    <div>
      <h1 className="text-5xl font-bold text-primary">Buy / sell <br/>  Bike easily</h1>
      <p className="py-6 text-2xl">Meet 100s of verified sellers <br/> within a click.</p>
      
    </div>
  </div>
</div>

        // <img src="" className="w-full" alt='bike' />
    );
};

export default Banner;