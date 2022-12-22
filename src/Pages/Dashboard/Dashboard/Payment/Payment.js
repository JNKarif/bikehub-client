import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_stripe_publishable_key);


const Payment = () => {
    const booking =useLoaderData()
    // console.log('booking data', booking)
    const {bike, price, bookingDate, buyer}=booking
    return (
        <div>
            <p className='text-3xl py-5'>Payment for {bike}</p>
            <p className='text-xl py-2'>Please pay <strong>{price} Taka</strong>  which was booked by  {buyer} at {bookingDate}</p>
       <div className='w-96 my-12 '>
       <Elements stripe={stripePromise}>
      <CheckoutForm 
      booking ={booking}
      />
    </Elements>
       </div>
       
        </div>
    );
};

export default Payment;