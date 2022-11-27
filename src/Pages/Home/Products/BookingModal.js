import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({bikeModel}) => {
    const {name, resell_price}=bikeModel;
    const {user}=useContext(AuthContext)


const handleBooking=event=>{
    event.preventDefault();
    const form= event.target;
    const location = form.location.value;
    const number = form.number.value;
    const nameUser= form.nameDisplay.value;
    const emailUser= form.userEmail.value;
    const bookedPrice= form.price.value;
    
console.log(location, number, nameUser, emailUser, bookedPrice)
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
    <input type="text" name='location' placeholder="Your Location" className="input input-bordered w-full" />
    <input type="text" name='number' placeholder="Your Phone Number" className="input input-bordered w-full" />
   <br/>
    <input type="submit" value="Submit" className='btn btn-primary w-full'/>
    </form>
  </div>
</div> 
        </div>
    );
};

export default BookingModal;