
/* eslint-disable */
import React from 'react';
import {Link} from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import axios from 'axios';
import {Button } from 'semantic-ui-react';
import myVideo from './vid1.mp4';



class Log extends React.Component{



//Gets the data and sumbits it for a post request
submit = data => {

  axios.post('http://localhost:3333/register',{
    
    email:data.email,
    password:data.password,
    
  })
  .then(function(response){


    var email = response.data.email;

    //This part is responsible for the window navigation after login.
    response.data.success
    ?  (document.getElementById('status').innerHTML = "Login Successfull! You are being redirected to landing page in 5 seconds.",setTimeout(() => {window.location.replace('/landing?name='+ email)},5000))
    : document.getElementById('status').innerHTML = response.data.message
  });
};



render(){

  //alert("Response is : " + this.state.response);
  return(

    <div align="top" >
       <video src={myVideo} type="video/mp4" autoPlay muted loop/>
      <center>
        <br/><br/><br/><br/><br/><br/>
      <h1 >Login</h1>
      <br/>
      <LoginForm />
          <p id="status"></p>
          <Link to="/product" >  <Button  className='btn1'>Login</Button></Link>
          <br/>
          <p>Make a new account? Right here.</p>
         
          <Link to="/sign-up" >
          <Button className='btn1' >Sign Up</Button>
          
          </Link>
          </center>
    </div>

  );

}

}

export default Log;