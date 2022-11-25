import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {


    const handleSignUp = event => {
        event.preventDefault()
        const form= event.target;
        const name= form.name.value;
        const email= form.email.value;
        const password= form.password.value;

        console.log(email, password, name)
    }
    
    return (
       <div className='flex justify-center my-10'>
         <form onSubmit={handleSignUp} className="card flex  w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" />

            </div>
            <p> Already have an account? <Link to='/login' className='text-primary'>Login</Link></p>

            <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
            </div>
        </div>
    </form>
       </div>
    );
};

export default SignUp;