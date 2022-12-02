import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Loading/Loading';

const AllUsers = () => {

    const {loading}=useContext(AuthContext)
const [users,setUsers]= useState()

useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
},[])




    // const { data: users=[], refetch, isLoading } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/users');
    //         const data = await res.json();
    //         return data; 
    //     }
    // })

if(loading){
    return <Loading></Loading>
}

const handleMakeAdmin= id=>{
    fetch(`http://localhost:5000/users/admin/${id}`,{
        method: 'PUT'
        // headers:{
        //     authorization:`bearer ${localStorage.getItem('accessToken')}`
        // }
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
            toast.success('Admin Made Successfully')
            // refetch()
        }
    })
}

    return (
        <div>
            <p className='text-3xl my-3'>All Users</p>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Make Admin</th>   
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
  
     {
        users?.map((user, i)=> <tr
        key={user._id}
        >
            <th>{i+1}</th>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user?.role!=='admin' && <button onClick={()=>handleMakeAdmin(user?._id)} className='btn btn-xs btn-primary' type="">Admin</button>}</td>
            <td><button className='btn btn-xs btn-warning' type="">Delete</button></td>
          </tr>)
     }
   
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;