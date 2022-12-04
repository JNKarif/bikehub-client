import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Context/AuthProvider';
import Loading from '../../../../Loading/Loading';



const MyProducts = () => {

 const {user}=useContext(AuthContext)
 const url = `http://localhost:5000/products?email=${user?.email}`
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            //     {
            //     headers:{
            //         authorization:`bearer ${localStorage.getItem('accessToken')}`
            //     }
            // }
            // );
            const data = await res.json();
            console.log(data)
            return data
        }
    })





//     const [products, setProducts] = useState([]);

    

//     useEffect(() => {


//         // axios.get(url).then(data => setProducts(data)).catch(err=>console.error(err))


//  fetch(url)
//         .then(res => res.json())
//         .then(data => setProducts(data))



//     }, [])

// 

if(isLoading){
    return <Loading></Loading>
    
}

// if(products){
//         return refetch()
//     }

   


    return (
        <div>
           <div className='flex flex-row justify-between'>
                <p className='text-3xl my-3'>My Products</p>
                <p className='text-xl text-secondary my-3'>Seller: {user?.displayName}</p>
                
            </div>


            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No. </th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Condition</th>
                            <th>Year of Purchase</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products &&

                            products?.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.category}</td>
                                    <td>{product.condition}</td>
                                    <td>{product.purhaseYear}</td>
                                    <td>{product.price}</td>
                                    <td>Available</td>
                                    <td><button className="btn btn-xs btn-info">Advertise</button></td>
                                    <td><button className="btn btn-xs btn-primary">Delete</button></td>
                                </tr>
                            )

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;