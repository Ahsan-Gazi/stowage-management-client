import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    //const [user, loading] = useAuthState(auth);
    return (
        
        <nav>
           {/* <NavLink to={/home}>Home</NavLink> */}

           {/* <CustomLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/home">Home</CustomLink>
           <CustomLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/login">Log In</CustomLink>
           <CustomLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/signup">Sign Up</CustomLink>
           <CustomLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/checkout">Check Out</CustomLink> */}

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

        {/* {user ? (
          <button onClick={() => signOut(auth)}>Sign Out</button>
        ) :
         (
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/login"
          >
            SignIn
          </NavLink>
        )} */}
        
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