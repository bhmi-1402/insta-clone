import React from 'react'
import logo from '../img/logo.png';
import './Signup.css'

function SignUp() {
const fetchData=async()=>{
  const response=await fetch("http://localhost:5000/signup");
  const data=await response.json()
  console.log(data);
}
useEffect(()=>{
  fetchData()
},[])
  return (
    <div className='signUp'>
        <div className='form-container'>
            <div className="form">
            <img className='signUpLogo' src={logo} />
            <p className='loginPara'>
                Sign up to see photos and videos <br/> from your friends
            </p>
            <div>
                <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div>
                <input type="text" name="text" id="fullname" placeholder="fullname" />
            </div>
            <div>
                <input type="text" name="text" id="username" placeholder="username" />
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="password" />
            </div>
            <p
            className="loginPara"
            style={{ fontSize: "12px", margin: "3px 0px" }}
          >
            By signing up, you agree to out Terms, <br /> privacy policy and
            cookies policy.
          </p>
          <input type="submit" id="submit-btn" value="Sign Up"  />
            </div>
            
        </div>
        </div>
  )
}

export default SignUp