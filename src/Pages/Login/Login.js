import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
        const form= event.target;
        const email= form.email.value;
        const password= form.password.value;

        console.log(email, password)
        
    }

    return (

        <div className='flex justify-center my-10'>
             <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className="text-3xl font-bold">Login now!</h1>
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
                <p> New to Bike Hub ? <Link to='/signup' className='text-primary'>Sign Up</Link> </p>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                
            </div>
        </form>
        </div>
       


    );
};

export default Login;