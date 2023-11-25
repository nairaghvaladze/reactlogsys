
import React, {Fragment} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";



function Page(){

  const navigate = useNavigate ();
  
  const Logout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.setItem('logedin', 'false');
    navigate('/mtavari');

   

    

  }
    return (
        <Fragment>
          <h1 className="text-center">კეთილი იყოს თქვენი მობრძანება!!!!!!!!!!!!!</h1>
          <div className="d-flex justify-content-center">
            <button className="btn btn-info" onClick={Logout} >
            გასვლა
            </button>
            </div> 
        </Fragment>
    )
}
export default Page;