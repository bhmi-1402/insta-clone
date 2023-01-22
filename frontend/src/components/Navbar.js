import React,{useContext}from 'react'
import logo from '../img/logo.png';
import './Navbar.css';
import {Link} from "react-router-dom"
import { LoginContext } from './context/LoginContext';

function Navbar({login}) {
  const {setModalOpen}=useContext(LoginContext)
  const loginStatus=()=>{
    const token=localStorage.getItem("jwt");
    if(login || token){
return [
  <>
   <a href="/profile"><li>Profile</li></a>
            <a href="/createPost"><li>Create Post</li></a>
            <a to={""}>
              <button className='primaryBtn' onClick={() => setModalOpen(true)}>Log Out</button>
            </a>
  </>
]
    }
    else{
      return[
        <>
         <a href="/signup"><li>SignUp</li></a>
            <a href="/signin"><li>SignIn</li></a>
        </>
      ]
    }
  }


  return (
    <div className='navbar'>
        <img src={logo}/>
        <ul className='nav-menu'>
            {loginStatus()}
        </ul>
    </div>
    
  )
}

export default Navbar