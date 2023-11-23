import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";



function Login() {
    
    const navigate= useNavigate();


   
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handLogin =(e) =>{
    e.preventDefault();
    const sEmail = localStorage.getItem('email');
    const sPassword = localStorage.getItem('password');

    if(email === sEmail && password === sPassword) {
        localStorage.setItem('logedin', "true");
        console.log('მონაცემები სწორია');
        navigate('/main')
    }else {
        window.alert('ასეთი მომხმარებელი არ არსებობს')
        navigate('/registracia');
        

    }

 }
  return (
    <div>
      <h2 className='text-center'>Sign In</h2>
      <div  className='d-flex justify-content-center'>
      <form onSubmit={handLogin}>
      <label className=' mt-3'>Email</label>
        <input
          type="email"
          placeholder="Email"
          className='form-control '
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className=' mt-3'>password</label>
        <input
          type="password"
          placeholder="Password"
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='btn btn-success mt-3' >შესვლა</button>
      </form>
      </div>
    </div>
  );
};
export default Login;
