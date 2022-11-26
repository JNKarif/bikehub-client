import { useQuery } from '@tanstack/react-query';
import Category from './Category';

const Categories = () => {
    
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    })


    return (
        <div className='my-10'>
            <p className='text-3xl text-center font-semibold text-secondary' >Product Categories</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2'>
                {
                    categories.map(brand => <Category
                        key={brand._id}
                        brand={brand}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories; 