import React,{useEffect,useState} from 'react'
import "./Home.css";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate =  useNavigate();
  const[data,setData]=useState([]);
  useEffect(() => {

  const token=localStorage.getItem("jwt");
  if(!token){
navigate("./signup")
  }
   fetch("http://localhost:5000/allposts",{
    headers:{
      "Authorization":"Bearer " + localStorage.getItem("jwt")
    },
   }).then(res=>res.json())
   .then(result=>setData(result))
   .catch(err=>console.log(err))
  }, [])
  
  return (
    <div class="home">
      {data.map((posts)=>{
        console.log(posts)
        return(
          <div className='card'>
        <div className="card-header">
          <div className="card-pic">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
          </div>
          <h5>{posts.postedBy.name}</h5>
        </div>
        <div className="card-image">
          <img src={posts.photo}/>
        </div>
        <div className="card-content">
        <span class="material-symbols-outlined">
favorite
</span>
<p>1 Like</p>
<p>{posts.body}</p>
        </div>
        <div className="add-comment">
        <span class="material-symbols-outlined">
mood
</span>
<input type="text" placeholder='Add a comment'/>
<button className='comment'>Post</button>
        </div>
      </div>
        )
          
        
      })}
      
    </div>
  )
}

export default Home