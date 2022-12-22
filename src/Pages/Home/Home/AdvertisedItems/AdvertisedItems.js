import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';


const AdvertisedItems = () => {

  const { user } = useContext(AuthContext)

const [items, setItems]=useState([]);

useEffect(()=>{
  fetch('http://localhost:5000/allproducts')
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    setItems(data)})
},[])


  // const { data: items = [] } = useQuery({
  //   queryKey: ['allproducts'],
  //   queryFn: async () => {
  //     const res = fetch('http://localhost:5000/allproducts');
  //     const data = await res.json();
  //     return data
  //   }
  // })

// const {data: sellers=[]}=useQuery({
//   queryKey: ['/users/seller/seller'],
//   queryFn: async ()=>{
//     const res= fetch('http://localhost:5000/users/seller/seller');
//     const data= await res.json();
//     return data
//   }
// })


  return (
    <div className='my-10'>
      <p className='text-3xl text-secondary font-semibold'>Available Bikes</p>
      <div className="overflow-x-auto">
        <table className="table w-full ">

          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Bike</th>
              <th>Price</th>
              <th>Seller Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            

            {

              items?.map((item, i) => 
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>

                <div className="avatar">
  <div className="w-20 rounded">
    <img src={item.image} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>

                </td>
                <td>{item.category} {item.productName}</td>
                <td>{item.price}</td>
                <td>{item.seller}
                {item.isVerified
                  ? <p className='text-warning'>Verified Seller</p> 
                  : <p className='text-warning'>Not Verified Seller</p>}
                  </td>
                <td> 
                  <button type="" className='btn btn-xs'>More info</button>
                </td>
              </tr>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdvertisedItems;