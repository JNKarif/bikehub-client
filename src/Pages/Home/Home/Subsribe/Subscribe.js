import React from 'react';

const Subscribe = () => {
    return (
        <div className='my-10 text-center font-bold h-36 bg-accent'>
          <span className="font-bold text-3xl p-6">Newsletter</span> 
         <div className='text-center'>
         <div className="form-control w-3/5 px-12  ">
            <label className="label ">
              <span className="label-text">Enter your email address</span>
            </label> 
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
         </div>
        </div>
    );
};

export default Subscribe;