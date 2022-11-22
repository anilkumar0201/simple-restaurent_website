import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import "./Login.css";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };
    // const navigateToForgotPassword = () => {
    //   navigate("/forgot");
    // };
  // const navigateToMovies = () => {
  //   navigate("/Movies");
  // }
  const [username1, setUsername1] = useState("");
  const [password1, setPassword1] = useState("");
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
          value={username1}
          onChange={(event) => setUsername1(event.target.value)}
        />
        <p className="invalid_username">Invalid Email</p>
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={password1}
          onChange={(event) => setPassword1(event.target.value)}
        />
        {/* <p className="invalid_password" onClick="navigateToMovies">Invalid Password</p> */}
        {/* <p className="forgot_password" onClick={navigateToForgotPassword}>
          Forgot Password ? */}
        {/* </p> */}
        <div className="button_container">
          <button className="sign_in_button" >Sign In</button>
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
