import { useNavigate } from "react-router-dom";

import "./Login.css";
import { useState } from "react";
import axios from "axios";

function Login() {
 
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };
  const navigateToMenu =()=>{
    navigate("/hotels")
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8002/api/login",{email:email,password:password})
    .then((res)=>{
      if(res.data.message==="true")
          navigateToMenu()
      else if(res.data.message==="false1")
          alert("user does not exists")
      else
         alert("invalid password")

    })
  }

   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div id="login">
      <form>
        <h3 className="title">Sign In</h3>
        <input
          type="text"
          name="username"
          required
          autoFocus
          autoComplete="off"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p className="invalid_username">Invalid Email</p>
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* <p className="invalid_password" onClick="navigateToMovies">Invalid Password</p> */}
        {/* <p className="forgot_password" onClick={navigateToForgotPassword}>
          Forgot Password ? */}
        {/* </p> */}
        <div className="button_container">
          <button onClick={handleSubmit}    className="sign_in_button" > Sign In</button>
          <p className="no_account">Don't have an account ?</p>
          <button className="sign_up_button" onClick={navigateToSignUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}


export default function login() {
  return (
    <div>
      {/* <Navbar /> */}
      <Login />
    </div>
  );
}
