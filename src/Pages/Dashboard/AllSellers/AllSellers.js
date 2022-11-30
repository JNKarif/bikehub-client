import { useQuery } from '@tanstack/react-query';
import { success } from 'daisyui/src/colors';
import React, { useContext, useState, } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Loading/Loading';
import ActionModal from '../../Shared/ActionModal/ActionModal';


const AllSellers = () => {

  const [deleteSeller, setDeleteSeller] = useState(null)
  const { user, _id } = useContext(AuthContext);
  const closeModal = () => {
    setDeleteSeller(null)
  }
  const url = `https://bikehub-server.vercel.app/users/seller?email=${user?.email}`

  const { data: sellers = [], isLoading, refetch } = useQuery({
    queryKey: ['sellers', user?.email],
    queryFn: async () => {
      const res = await fetch(url,

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
    return <Loading></Loading>
  }


  const handleDelete = ( seller) => {

console.log(seller)


    fetch(`https://bikehub-server.vercel.app/users/seller/${seller._id}`, {
      method: 'DELETE'
    
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch()
          toast.success(`${seller?.userName} deleted successfully`)
        }
      })
  }




  // const [sellers, setSellers]=useState([]);

  // useEffect(()=>{
  //   fetch('https://bikehub-server.vercel.app/users/seller',
  //   headers:{
  //     authorization:`bearer ${localStorage.getItem('accessToken')}`
  // }
  //   )
  //   .then(res=>res.json())
  //   .then(data=>setSellers(data))
  // },[])





  return (
    <div>
      <p className='text-3xl my-3'>All Sellers</p>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>

            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify Seller</th>
              <th>Delete Seller</th>
            </tr>

          </thead>
          <tbody>

            {
              sellers?.map((seller, i) => <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.userName}</td>
                <td>{seller.email}</td>
                <td><button type="" className='btn btn-xs btn-success'> Verify</button></td>

                {/* The button to open modal */}
                <label onClick={() => setDeleteSeller(seller)} htmlFor="action-modal" className="btn btn-xs btn-primary">Delete</label>

              </tr>)

            }

          </tbody>
        </table>
      </div>

      {
        deleteSeller && <ActionModal

          title={`Are you sure to delete?`}
          message={`If you delete Mr/Mrs. ${deleteSeller.userName} , it can not be undone `}
          successAction={handleDelete}
          modalData={deleteSeller}
          closeModal={closeModal}
          successButtonName={'Delete'}
        >



        </ActionModal>
      }
    </div>
  );
};

export default AllSellers;