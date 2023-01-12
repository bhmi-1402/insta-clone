import React from 'react'
import logo from '../img/logo.png';

function SignUp() {
  return (
    <div className='signUp'>
        <div className='form-container'>
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
        </div>
        </div>
  )
}

export default SignUp