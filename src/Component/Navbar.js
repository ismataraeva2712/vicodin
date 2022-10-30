import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init'
import { GiLovers } from 'react-icons/gi';
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
};
    const menuItem=<>
    <li><Link to='/'>Home</Link></li>
   
  
    <li>{user && <div className="avatar">

{
    user?.photoURL ?
        <div className="  w-8 rounded-full">
            <img src={user?.photoURL} alt="" />
        </div>
        :
        <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span>{user?.displayName?.slice(0, 1)}</span>
            </div>
        </div>
}

<p>{user?.displayName}</p>
</div>}</li>
    <li>{user ? <p onClick={logout} >Sign Out</p> : <Link to='/login'>Login</Link>}</li>
   
    
    
    </>
    return (
        <div className="navbar bg-primary text-white px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {menuItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"> <GiLovers className='text-3xl text-white mr-1'></GiLovers> Tamil Matrimony </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           {menuItem}
          </ul>
        </div>
        
      </div>
    );
};

export default Navbar;