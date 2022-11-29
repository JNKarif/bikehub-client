import React, { useEffect, useState } from 'react';


const AllSellers = () => {
const [sellers, setSellers]=useState([]);

useEffect(()=>{
  fetch('https://bikehub-server.vercel.app/users/seller')
  .then(res=>res.json())
  .then(data=>setSellers(data))
},[])





    return (
        <div>
          <p className='text-3xl my-3'>All Sellers</p>  
          <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      
       <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Verify Seller</th>
        <th>Delete Seller</th>
      </tr>
      
    </thead>
    <tbody>
      
     {
      sellers.map((seller, i)=> <tr key={seller._id}>
      <th>{i+1}</th>
      <td>{seller.userName}</td>
      <td>{seller.email}</td>
      <td><button type="" className='btn btn-xs btn-success'> Verify</button></td>
      <td><button type="" className='btn btn-xs btn-primary'> Delete</button></td>
    </tr>)
     }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSellers;