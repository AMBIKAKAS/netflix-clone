import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase.js';
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[loading,setLoading]= useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === 'Sign In') {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading=(false);
  };

  return (
    loading?<div className="netflix-spinner">
      <img src={netflix_spinner} alt=" "/>
    </div>:
    <div className="login">
      <img src={logo} alt="login-logo" className="login-logo" />

      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}> 
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            type="password"
            placeholder="Password"
          />
          <button type="submit">{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>

          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?
                <span onClick={() => setSignState("Sign Up")}> Sign Up now</span>
              </p>
            ) : (
              <p>
                Already have an Account?
                <span onClick={() => setSignState("Sign In")}> Sign In Now</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
