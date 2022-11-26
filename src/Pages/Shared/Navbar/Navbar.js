import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

const handleLogOut =()=>{
  logOut()
  .then(()=>{})
  .catch(err => console.log(err))
}

  return (
    <div className="navbar bg-base-200 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='blog'>Blog</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-2xl text-primary font-extrabold">Bike Hub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
        </ul>
      </div>
      <div className="navbar-end">

        {
          user?.uid ? <button onClick={handleLogOut} className="btn">Sign Out</button>
            : <Link to='/login' className="btn">Login</Link>
        }

      </div>
    </div>
  );
};

export default Navbar;