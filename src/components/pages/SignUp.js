import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import {Link} from "react-router-dom";
import {Button } from 'semantic-ui-react';
import myVideo from './vid1.mp4';
import "react-toggle/style.css"
import './page.css';


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/log");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div align="top">
    <video src={myVideo} type="video/mp4" autoPlay muted loop/>
   <center>
   <br/><br/>
     <br/><br/><br/><br/>
   <h1 >Registration Page</h1>
   <br/>
   <form onSubmit={handleSignUp}>

   <label htmlFor="email"><b>Email</b></label>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="email" className="email" placeholder="Enter Email" id="email" name="email" />

          <br/><br/>

          <label htmlFor="password"><b>Password</b></label>&nbsp;&nbsp;&nbsp;
          <input type="password" className="email" placeholder="Enter Password" id="password" name="password"/>
          <br/><br/>

          <Button type="submit" className='btn1'>Register</Button>
         
      </form>

     <p id="status"></p> <br/>
     <p>Already have an account?</p>
    
       <Link to="/log" >
       <Button className='btn1' >Login</Button>
       </Link>
  &nbsp;&nbsp;&nbsp;
       <Link to="/" >
       <Button className='btn1'  >Back to Home</Button>
       </Link>
</center>
 </div>

  );
};

export default withRouter(SignUp);