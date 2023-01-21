import React,{useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import './Createpost.css'
import { useNavigate } from "react-router-dom";

function Createpost() {
  const [body, setBody] = useState("");
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
  const navigate = useNavigate();


  // Toast functions
  const notifyA = (msg) => toast.error(msg)
  const notifyB = (msg) => toast.success(msg)


  useEffect(()=>{
    if(url){
      fetch("http://localhost:5000/createPost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        body,
        pic: url
      })
    }).then(res => res.json())
      .then(data => {
        if(data.error){
notifyA(data.error)
      }else{
        notifyB("Successfully posted")
        navigate("/");
      }})
      .catch(err => console.log(err))
    }
    
  },[url])

  const postDetails=()=>{
    console.log(body,image)
    const data=new FormData();
    data.append("file",image)
    data.append("upload_preset","insta-clone")
    data.append("cloud_name","bhoomicloud")
    fetch("https://api.cloudinary.com/v1_1/bhoomicloud/image/upload",{
      method:"post",
      body:data
    }).then(res=>res.json())
    .then(data=>setUrl(data.url))
    .catch(err=>console.log(err))

    
  }


  
  const loadFile = (event)=> {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  }
  return (
    
    // <div>Createpost</div>
    <div className="createPost">
      <div className="post-header">
        <h4 style={{margin:"3px auto"}}>Create New Post</h4>
        <button className="post-btn" onClick={()=>{postDetails()}}>
          Share
        </button>
      </div>
    <div className="main-div">
      <img id="output" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-1024.png"/>
      <input type="file" accept="image/*" 
      onChange={(event) => {
        loadFile(event);
        setImage(event.target.files[0])
      }}/>
    </div>
    <div className="details">
      <div className="card-header">
        <div className="card-pic">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        </div>
        <h5>Bhoomi</h5>
      </div>
      <textarea value={body} onChange={(e) => {
        setBody(e.target.value)
        }}  type="text" placeholder='write a caption.....'/>
    </div>
    </div>
  )
}

export default Createpost