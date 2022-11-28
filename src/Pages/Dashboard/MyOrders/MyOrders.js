import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })

    return (
        <div>
            <div className='flex flex-row justify-between'>
                <p className='text-3xl my-3'>My Orders</p>
                <p className='text-xl text-secondary my-3'>Buyer: {user?.displayName}</p>
                {/* <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt='' />
                    </div>
                </div> */}
            </div>

            <div className="overflow-x-auto ">
                <table className="table  w-full">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Bike</th>
                            <th>price</th>
                            <th>Booking Date</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            bookings?.map((booking, i) => <tr
                                key={booking._id}
                            >
                                <th>{i + 1}</th>
                                <td>{booking.bike}</td>
                                <td>{booking.price}</td>
                                <td>{booking.bookingDate}</td>
                                <td>Blue</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;