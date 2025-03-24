import React, { useEffect, useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import {auth, login,signup} from '../../firebase'
import {useNavigate} from "react-router-dom";
import netflix_loader from '../../assets/netflix_spinner.gif'
const Login = () => {
  const [signstate,Setsignstate]=useState("Sign In");
  const[Username,setusername]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[loading,setloading]=useState(false);
  const navigate = useNavigate(); 

  const user_auth=async(event)=>{
    event.preventDefault();
    setloading(true)
    if(signstate==="Sign In"){
      await login(email,password);
      
    }
    else{
      await signup(Username,email,password)
      
      
    }
    setloading(false)
  }
  
  return (
    
    loading? <div className="loading"><img src={netflix_loader} alt="" /></div>:
    <div className="login-page">
      <img src={Logo} alt="logo" className='logo'  />
      <div className="form">
        <h1>{signstate}</h1>
        {signstate==="Sign In"?<></>:<input type="text" placeholder='Username'value={Username} onChange={(e)=>setusername(e.target.value)} />}
        <input type="email" placeholder='E-mail'value={email} onChange={(e)=>setemail(e.target.value)} />

        <input type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={user_auth} >{signstate}</button>
        <div className="remberme">
          <div className="rem">
          <input type="checkbox" name="remember-me" value="Remember me" id="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
          </div>
          <p>Need help ?</p> 
        </div>
        <div className="sign-state">
          {signstate==="Sign In"?<p> Create a new account? <span onClick={()=>{Setsignstate("Sign Up")}}>Sign Up</span></p>:<p> Already have an account?  <span onClick={()=>{Setsignstate("Sign In")}}> Log In</span></p>}
         
         
      </div>
      </div>

    </div>

    
  )
}

export default Login