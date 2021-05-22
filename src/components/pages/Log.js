import React, { useCallback} from "react";
import { withRouter} from "react-router";
import app from "./base.js";
import {Link} from "react-router-dom";
import {Button } from 'semantic-ui-react';
import myVideo from './vid1.mp4';
import './page.css';

const Log = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/product");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (

    <div align="top" >
    <video src={myVideo} type="video/mp4" autoPlay muted loop/>
   <center>
     <br/><br/><br/><br/><br/><br/>
   <h1 >Login</h1>
   <br/>
   <form onSubmit={handleLogin}>
   <br/>
         
         <label htmlFor="email" className="email"><b>Email</b></label>
         <input type="email" className="email" placeholder="Enter Email" id="email" name="email"/>

         <br/><br/>

         <label htmlFor="password"><b>Password</b></label>&nbsp;&nbsp;
         <input type="password" className="email" placeholder="Enter Password" id="password" name="password" />


         <br/><br/>
  <Button  type="submit"  className='btn1' >Login</Button>
      </form>
       <br/>
       <p>Make a new account? Right here.</p>
      
       <Link to="/sign-up" >
       <Button className='btn1' >Sign Up</Button>
       
       </Link>
       </center>
 </div>
   
     
  
  );
};

export default withRouter(Log);