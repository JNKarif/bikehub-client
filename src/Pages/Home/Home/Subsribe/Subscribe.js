import React from 'react';

const Subscribe = () => {
    return (
        <div className='my-10  hidden lg:block font-bold h-48 rounded-xl p-10 '>
            <span className="font-bold text-3xl mb-4">Want Product News and Updates?</span>
            <div className='text-center'>
                <div className="form-control  lg:w-3/5   ">
                    <label className="label ">
                        <span className="label-text">Enter your email address for our Newsletter</span>
                    </label>
                    <div className="relative">
                        <form>

                            <input type="email" required placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;