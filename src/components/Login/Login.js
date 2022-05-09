

import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import {useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
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


    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

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
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
        </div>
    );
};

export default Login;