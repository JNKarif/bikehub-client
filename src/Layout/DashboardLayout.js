import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar'

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
<img className='w-[500px]' src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1669963966~exp=1669964566~hmac=f5e04ec4db2d481ff64b64daa9cc7b800de562dbd86bd0b00d9dd3e66697db94" alt=""/>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">


                        {/* only buyer route */}
                        {
                        isBuyer && <>
                         <li><Link to='/dashboard/buyer'>My Orders</Link></li>
                        </>
                       }



                        {/* <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                        <li><Link to='/dashboard/seller'>Add Product</Link></li> */}
                        


                        {/* Only seller route */}
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/seller'>Add product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }


                        {/* admin only route */}
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                {/* <li><Link to='/dashboard/seller'>Seller Account</Link></li>
                         <li><Link to='/dashboard'>My Orders</Link></li>
                         <li><Link to='/dashboard/myproducts'>My Products</Link></li> */}
                            </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;