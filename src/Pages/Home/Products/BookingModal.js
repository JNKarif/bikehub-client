import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import useBuyer from '../../../Hooks/useBuyer';
import useSeller from '../../../Hooks/useSeller';

const BookingModal = ({ bikeModel, setBikeModel }) => {
    const { name, resell_price } = bikeModel;
    const { user, logOut } = useContext(AuthContext)
    const [isSeller] = useSeller(user?.email)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const location = form.location.value;
        const number = form.number.value;
        const nameUser = form.nameDisplay.value;
        const emailUser = form.userEmail.value;
        const bookedPrice = form.price.value;



if(isSeller){
    return logOut && toast.error('Please login from a buyer account or registered as buyer')
}
       

const booking = {
            bike: name,
            buyer: nameUser,
            buyerLocation: location,
            buyerPhone: number,
            email: emailUser,
            price: bookedPrice,
            bookingDate: new Date()
        }


        /*-------------------------------
        N.B. after seding dtat to the 
        server and after saving the data
        then close the modal 
        and display success toast
        -------------------------------*/

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBikeModel(null)
                    toast.success(`${name} bike is successully booked for ${nameUser}`)
                }
            })


        console.log(booking)



        // console.log(location, number, nameUser, emailUser, bookedPrice)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" name='nameDisplay' disabled value={user.displayName} className="input input-bordered w-full" />
                        <input type="text" name='userEmail' disabled value={user.email} className="input input-bordered w-full" />
                        <input type="text" name='price' disabled value={resell_price} className="input input-bordered w-full" />
                        <input type="text" required name='location' placeholder="Your Location" className="input input-bordered w-full" />
                        <input type="text" required name='number' placeholder="Your Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input type="submit" value="Submit" className='btn btn-primary w-full' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;