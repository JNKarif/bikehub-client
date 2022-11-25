import React from 'react';
import verified from '../../../../Assets/Images/verified.png'

const Steps = () => {
    return (
        <div className='bg-base-200 rounded-xl'>
            <p className='text-3xl text-secondary font-semibold text-center'>Be a verified seller by following steps !</p>
           <div className='flex lg:flex-row flex-col'>
           <ul className="steps steps-vertical font-bold px-52">
  <li className="step step-primary">Register</li>
  <li className="step step-primary">Submit documents</li>
  <li className="step step-primary">Choose plan</li>
  <li className="step">Purchase</li>
  <li className="step">Be verified</li>
</ul>

<div>
    <img className='h-96' src={verified} alt=""/>
</div>
           </div>
           

        </div>
    );
};

export default Steps;