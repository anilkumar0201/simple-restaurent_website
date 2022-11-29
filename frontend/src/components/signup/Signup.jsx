import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import "./signup.css";
import React, { useState } from "react";
import axios from "axios";


function CreateAcc() {
  const navigate = useNavigate();
  const navigateToMenu = () => {
    navigate("/hotels");
  };
function submitHandler(e){
  e.preventDefault()
  const user={
    email:email,
    password:password,
    confirm:confirm
  }
  if(password==confirm)
  {
  axios.post("http://localhost:8002/api/signUp",user)
  navigateToMenu()
  }
  else
    alert("password and confirm password should be same")
}

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  return (
    <div id="signup">
      <form id="signup_form" >
        <br />
        <h1>Sign Up</h1>
        <br />
        <center>
          <input
            type="text"
            name="username"
            placeholder="Email"
            autoComplete="off"
            required
            autoFocus
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {/* {username} */}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {/* {password} */}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            required
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
          />
          <br />
          {/* {confirm} */}
          <br />
          <br />
          <button onClick={submitHandler}>Sign Up</button>
        </center>
      </form>
    </div>
  );
}
function SignUp() {
  return (
    <div>
      {/* <Navbar /> */}
      <CreateAcc />
    </div>
  );
}
export default SignUp;