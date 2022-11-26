import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {

 
  const products = useLoaderData()



  return (

    <div className='my-10'>
      <p className='text-3xl text-center font-semibold text-secondary' >Ready for grab</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2'>

        {
          products?.map(bike => <Product
          key={bike._id}
            bike={bike}
          ></Product>)
        }

      </div>
    </div>
  );
};

export default Products;