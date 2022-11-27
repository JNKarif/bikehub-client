import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
// import Products from '../Products/Products';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Steps from './Steps/Steps';
import Subscribe from './Subsribe/Subscribe';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Categories></Categories>
            {/* <Products></Products> */}
            <AdvertisedItems></AdvertisedItems>
            <Steps></Steps>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;