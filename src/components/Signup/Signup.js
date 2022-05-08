
import React, { useState } from 'react';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Signup = () => {
    const [userInfo,setUserInfo]=useState({
        
        email:'',
        password:'',
        confirmPassword:''
    })
    console.log(userInfo.email,userInfo.password,userInfo.confirmPassword)
    // const [error,setEror]=useState({
    //     email:'',
    //     password:'',
    //     confirmPassword:''
    // })
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailChange=(e)=>{
        setUserInfo({...userInfo,email:e.target.value});
    }
    const handlePasswordChange=(e)=>{
        setUserInfo({...userInfo,password:e.target.value});
    }
    const handleConfirmPasswordChange=(e)=>{
        setUserInfo({...userInfo,confirmPassword:e.target.value});
    }
    const signupSubmit=(e)=>{
        
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email,userInfo.password);
    }
    return (
        <div>
             <form onSubmit={signupSubmit} className='w-50 mx-auto'>
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

              {  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input onChange={handleConfirmPasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
                </div>}

               
                <button type="submit" className="btn btn-primary">Signup</button>
            </form> 
        </div>
    );
};

export default Signup;