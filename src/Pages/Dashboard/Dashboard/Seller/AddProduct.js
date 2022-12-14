import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import Loading from '../../../Loading/Loading';


const AddProduct = () => {

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    // console.log(user)
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey)

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['productsCategory'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/productsCategory',
                // {
                //         headers:{
                //             authorization:`bearer ${localStorage.getItem('accessToken')}`
                //         }
                //     }
            );
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.product.value;
        const condition = form.condition.value;
        const purhaseYear = form.year.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const mobile = form.mobile.value;
        const location = form.location.value;

        const photo = form.photo.files;
        const image = photo[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const products = {
                        productName,
                        condition,
                        category,
                        image: imgData.data.url,
                        purhaseYear,
                        price,
                        description,
                        mobile,
                        location,
                        email: user.email,
                        seller: user.displayName,
                        isVerified: user.emailVerified

                    }


                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(products)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success('Product added for sell successfully ')
                            navigate('/dashboard/myproducts')
                        })


                }
            })

        // console.log(photo[0])
        // console.log(productName, condition,category, price, mobile, location)







    }

    return (
        <div>


            <div className='flex justify-center my-10'>
                <form onSubmit={handleAddProduct} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Add Products</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input name='product' type="text" placeholder="Enter product name" required className="input input-bordered" />
                        </div>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Product categories</span>
                            </label>
                            <select name='category' className="select select-bordered">

                                <option disabled selected>Pick one</option>
                                {
                                    categories.map(category =>
                                        <option
                                            key={category._id}

                                        >{category.cateogoryName}</option>

                                    )

                                }

                            </select>
                        </div>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Product Condition</span>
                            </label>
                            <select name='condition' className="select select-bordered">

                                <option disabled selected>Pick one</option>

                                <option >Exclellent</option>
                                <option >Good</option>
                                <option >Fair</option>
                            </select>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input name='photo' type='file' placeholder="Upload product image" required className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Year of Purchase</span>
                            </label>
                            <input name='year' type="text" placeholder="Enter year of purchase" required className="input input-bordered" />
                        </div>


                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Write some details not exceeding 50 words"></textarea>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' type="text" placeholder="Enter your price" required className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input name='mobile' type="text" placeholder="Enter your mobile Number" required className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input name='location' type="text" placeholder="Enter your locaton" required className="input input-bordered" />
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary mb-3">Add Product</button>

                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;