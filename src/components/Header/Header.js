import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import './Header.css';

import auth from '../../firebase.init';
// import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        
        <nav>
          

          

<div className="nav-container">
      <div>Ahsan gazi</div>
      <div className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/home#services"
        >
          Services
        </NavLink>
        {/* <Nav.Link href="home#services">Services</Nav.Link> */}
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/blogs"
        >
          Blogs
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/checkout"
        >
          Checkout
        </NavLink>

        {user ? (
          <button onClick={() => signOut(auth)}>Sign Out</button>
        ) :
         (
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/login"
          >
            SignIn
          </NavLink>
        )}
        
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/signup"
        >
          SignUp
        </NavLink>
      </div>
    </div>
        </nav>

    );
};

export default Header;