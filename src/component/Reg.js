import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate } from "react-router-dom";


function Reg() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();
  const handleReg = (e ) => {
   
    e.preventDefault();

   
  
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('logedin', 'true'); 

    if (name === "" && email === "" && password === ""){
        window.alert("შეიყვანეთ სრულყოფილი მონაცემები; სახელი, მეილი ან პაროლი ცარიელია")

    } else{
        window.alert('თქვენ წარმატებით გაიარეთ რეგისტრაცია!')
        navigate('/login');

    }
  };

  return (
    <div >
      <h2 className='text-center'>რეგისტრაცია</h2>
      <div  className='d-flex justify-content-center'>

      <form onSubmit={handleReg}>
        <label>name</label>
        <input
          type="text"
          placeholder="Name"
          className='form-control'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label>Email</label>
        <input
          type="email"
          className='form-control'
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          type="password"
          className='form-control'
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className='btn btn-success' >რეგისტრაცია</button>
       
      </form>
      </div>
    </div>
  );
};

export default Reg;
