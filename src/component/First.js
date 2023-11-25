import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate } from "react-router-dom";

function First() {
    const navigate= useNavigate();


   

    const signbutton= () =>{
        navigate('/login')
         
    }

    return (
        <div className="d-flex justify-content-center align-item-center mt-5" > 
    
   
   
    <div>
        <button onClick={signbutton}  className="btn btn-primary ms-4"> შესვლა </button>
    </div>
        </div>
    )
}
export default First