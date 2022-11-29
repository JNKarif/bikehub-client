import React, { useEffect, useState } from 'react';

const MyProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://bikehub-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <p className='text-3xl my-3'>My Products</p>


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

products.map((product, i)=>
<tr key={product._id}>
<th>{i+1}</th>
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