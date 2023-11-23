import React from "react";
import { BrowserRouter,  Routes, Route, Navigate} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Login from "./component/Login";
import Reg from "./component/Reg";
import Page from "./component/Page";
import First from "./component/First";



function App() {

    
        const userSingin=localStorage.getItem('loggedin') === true ; 


    return(
     
        
            <BrowserRouter>
            <Routes>
            <Route index path="/" element={ userSingin ? 
                ( <Navigate to="/main" /> )
                : (<Navigate to="/mtavari" replace={true}/> )
                }   /> 
             <Route path="/mtavari" element={<First />} />            
            <Route path="/registracia" element={<Reg />}/>
            <Route path="/login" element={<Login /> } />
            <Route path="/main" element={<Page />} />




           </Routes>
            </BrowserRouter>
                
   
        
      
      

           
       
        );
  }
   
       
        
var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);