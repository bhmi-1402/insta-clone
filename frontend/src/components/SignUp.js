import { Types } from 'mongoose';
import React,{useEffect,useState} from 'react'
import logo from '../img/logo.png';
import './Signup.css'

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
const postData=()=>{
  fetch("http://localhost:5000/signup",{
    methode:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name:name,
      email:email,
      userName:userName,
      password:password

    })
  })
  .then(res=>res.json())
  .then(data=>{console.log(data)})
}
  return (
    <div className='signUp'>
        <div className='form-container'>
            <div className="form">
            <img className='signUpLogo' src={logo} />
            <p className='loginPara'>
                Sign up to see photos and videos <br/> from your friends
            </p>
            <div>
                <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value) }} />
            </div>
            <div>
                <input type="text" name="text" id="fullname" value={name} onChange={((e) => { setName(e.target.value) })} placeholder="fullname" />
            </div>
            <div>
                <input type="text" name="text" id="username" placeholder="username" value={userName}
              onChange={(e) => { setUserName(e.target.value) }} />
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="password" value={password}
              onChange={(e) => { setPassword(e.target.value) }}/>
            </div>
            <p
            className="loginPara"
            style={{ fontSize: "12px", margin: "3px 0px" }}
          >
            By signing up, you agree to out Terms, <br /> privacy policy and
            cookies policy.
          </p>
          <input type="submit" id="submit-btn" value="Sign Up" onClick={(e)=>{postData()}} />
            </div>
            
        </div>
        </div>
  )
}

export default SignUp