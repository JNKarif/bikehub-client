import React from 'react';

const AllSellers = () => {
    return (
        <div>
          <p className='text-3xl'>All Sellers</p>  
          <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Verify Seller</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSellers;