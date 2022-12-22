import React from 'react';
import { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {

    const error = useRouteError()
    const { logOut } = useContext(AuthContext)
const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => { 
                navigate('/login')
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <p className='text-red-600'>Somthing went wrong !!!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <p className='text-3xl'>Please <button onClick={handleLogOut} className="btn">Sign Out</button>and Login again</p>
        </div>
    );
};

export default DisplayError;