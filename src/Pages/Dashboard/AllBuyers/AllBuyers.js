import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState, } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ActionModal from '../../Shared/ActionModal/ActionModal';



const AllBuyers = () => {

  const [deleteBuyer, setDeleteBuyer] = useState(null)
  const { user } = useContext(AuthContext);

  const closeModal = () => {
    setDeleteBuyer(null)
  }

  const url = `https://bikehub-server.vercel.app/users/buyer?email=${user?.email}`

  const { data: buyers = [], isLoading , refetch} = useQuery({
    queryKey: ['buyers', user?.email],
    queryFn: async () => {
      const res = await fetch(url

        //   {
        //     headers:{
        //         authorization:`bearer ${localStorage.getItem('accessToken')}`
        //     }
        // }

      );
      const data = await res.json();
      return data
    }
  })

  if (isLoading) {
    return
  }



  const handleDelete = buyer => {
    console.log(buyer)
    fetch(`https://bikehub-server.vercel.app/users/buyer/${buyer._id}`, {
      method: 'DELETE'
    
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch()
          toast.success(`${buyer?.userName} deleted successfully`)
        }
      })


  }




  return (
    <div>
      <p className='text-3xl my-3'>All Buyers</p>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>

            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>

              <th>Delete Buyer</th>
            </tr>

          </thead>
          <tbody>

            {
              buyers?.map((buyer, i) => <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>{buyer.userName}</td>
                <td>{buyer.email}</td>

                <label onClick={() => setDeleteBuyer(buyer)} htmlFor="action-modal" className="btn btn-xs btn-primary">Delete</label>
              </tr>)
            }


          </tbody>
        </table>

        {
          deleteBuyer && <ActionModal

            title={`Are you sure to delete?`}
            message={`If you delete Mr/Mrs. ${deleteBuyer.userName} , it can not be undone `}
            closeModal={closeModal}
            successButtonName={'Delete'}
            successAction={handleDelete}
            modalData={deleteBuyer}
          ></ActionModal>
        }

      </div>


    </div>
  );
};

export default AllBuyers;