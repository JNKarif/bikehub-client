import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';
import Loading from '../Loading/Loading';


const Login = () => {

    const { user, login, loading } = useContext(AuthContext)

    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const [seller, setSeller] = useState([])
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    if (token) {
        navigate(from, { replace: true });
    }


    if (loading) {
        return <Loading></Loading>
    }

    // if (user.role === 'seller') {

    // }

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(email)
                // if (user?.role === 'seller') {
                //     setSeller([...seller, user])
                // }
                // else{
                //     navigate('/login')
                // }

            })
            .catch(error => console.error(error))
        // console.log(email, password)

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
                        <input name='email' type="email" placeholder="email" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" required className="input input-bordered" />

                    </div>
                    <p> New to Bike Hub ? <Link to='/signup' className='text-primary'>Sign Up</Link> </p>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary mb-3">Login</button>

                    </div>

                </div>
            </form>
        </div>



    );
};

export default Login;