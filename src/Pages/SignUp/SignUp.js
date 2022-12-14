import { toast } from 'react-hot-toast';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Loading/Loading';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../Hooks/useToken';



const SignUp = () => {
    const { createSeller, updateUser, loading, providerLogin, user } = useContext(AuthContext);

    // const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()


    // if (token) {
    //     navigate('/')
    // }
if(user){
    navigate('/')
}

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;

        console.log(userName, email, password, role)
        if (loading) {
            return <Loading></Loading>
        }

        createSeller(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success(`${userName} added as a seller  successfully`)
                const userInfo = {
                    displayName: userName
                }
            saveUser(userName, email, role)

                updateUser(userInfo)
                    .then(() => {
                       
                        console.log(userName,email, role,password)
                    })
                    .catch(err => console.error(err))
            })
            .catch(error => console.error(error))

        // console.log(email, password, userName, role)


    }


    const saveUser = (userName, email, role) => {
        const user = { userName, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                
                console.log(data);
                // setCreatedUserEmail(email)
            })
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUser(user.displayName, user.email, 'buyer')
                // saveUser(user.displayName, user.email, user.role)
                // setCreatedUserEmail(user.email)
                toast.success(`${user.displayName} added as a buyer/user successfully`)
                navigate('/')
            })
            .catch(err => console.error(err))
    }




    return (
        <div className='flex justify-center my-10'>
            <form onSubmit={handleSignUp} className="card flex  w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl font-bold">Sign Up</h1>




                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Account Type</span>
                        </label>
                        <select required name='role' className="select select-bordered">

                            <option disabled selected>Pick one</option>

                            <option >buyer </option>
                            <option >seller </option>

                        </select>

                    </div>



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
                        <button className="btn btn-primary mb-3">Sign Up</button>

                        
                    </div>
                </div>
            </form>
            <button onClick={handleGoogleSignIn} className="btn btn-primary">Continue With Google</button>
        </div>
    );
};

export default SignUp;