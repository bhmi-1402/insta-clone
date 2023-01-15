import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png';
import './SignIn.css'

function SignIn() {
  return (
    <div><div className="signIn">
    <div>
      <div className="loginForm">
        <img className="signUpLogo" src={logo} alt="" />
        <div>
          <input type="email" name="email" id="email"  placeholder="Email" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        <input type="submit" id="login-btn"  value="Sign In" />
      </div>
      <div className="loginForm2">
        Don't have an account ?
        <Link to="/signup">
          <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
        </Link>
      </div>
    </div>
  </div></div>
  )
}

export default SignIn