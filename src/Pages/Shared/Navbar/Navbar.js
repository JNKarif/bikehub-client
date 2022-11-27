import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err))
  }

  const menuItems = <React.Fragment>
    <li><Link to='blog'>Blog</Link></li>

    {
      user?.uid ?
        <>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <button onClick={handleLogOut} className="btn">Sign Out</button>
        </>
        : <Link to='/login' className="btn">Login</Link>
    }
  </React.Fragment>



  return (
    <div className="navbar bg-base-200 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-2xl text-primary font-extrabold">Bike Hub</Link>
      </div>
      <div className=" hidden lg:flex">
        <ul className="menu navbar-end menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
      
    </div>
  );
};

export default Navbar;