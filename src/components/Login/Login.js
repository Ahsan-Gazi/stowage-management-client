



import React, { useEffect, useState } from 'react';
import {useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {

    const [userInfo,setUserInfo]=useState({
        
        email:'',
        password:'',
       
    })
    console.log(userInfo.email,userInfo.password)
    // const [error,setEror]=useState({
    //     email:'',
    //     password:'',
    
    // })
    const [
        signInWithEmailAndPassword,
        user,
        //loading,
        //hookError,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, googleUser//, googleLoading, googleError
    ] = useSignInWithGoogle(auth);

    const handleEmailChange=(e)=>{
        setUserInfo({...userInfo,email:e.target.value});
    }
    const handlePasswordChange=(e)=>{
        setUserInfo({...userInfo,password:e.target.value});
    }
   
    const signinSubmit=(e)=>{
        
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email,userInfo.password);
    }

    const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
    }},[user,googleUser])

    return (
        <div>
            <form onSubmit={signinSubmit} className='w-50 mx-auto'>
                <h2>
                  
                </h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form> 
            <button onClick={()=>signInWithGoogle()}>Google Signin</button>
        </div>
    );
};

export default Login;