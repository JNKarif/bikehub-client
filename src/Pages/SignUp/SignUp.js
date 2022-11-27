import { toast } from 'react-hot-toast';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Loading/Loading';
import { signInWithPopup } from 'firebase/auth';


const SignUp = () => {
    const { createSeller, updateUser, loading, googleProvider } = useContext(AuthContext);
    const navigate= useNavigate()

   
    // const handleGoogleSignUp= () =>{
    //     return signInWithPopup(auth, googleProvider)

    // }

   
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

if(loading){
    return <Loading></Loading>
}

        createSeller( email, password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            toast('User created successfully')
            const userInfo ={
                displayName: userName
            }
            updateUser(userInfo)
            .then(()=>{
                navigate('/')
            })
            .catch(err=>console.error(err))
        })
        .catch(error=> console.error(error))

        // console.log(email, password, userName)
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
                        <input name='name' type="text" placeholder="name" required className="input input-bordered" />
                    </div>
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