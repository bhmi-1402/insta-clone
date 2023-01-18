import React from 'react'
import './Createpost.css'

function Createpost() {
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
        <button className="post-btn">
          Share
        </button>
      </div>
    <div className="main-div">
      <img id="output" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-1024.png"/>
      <input type="file" accept="image/*" onChange={(event)=>{loadFile(event)}}/>
    </div>
    <div className="details">
      <div className="card-header">
        <div className="card-pic">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        </div>
        <h5>Bhoomi</h5>
      </div>
      <textarea type="text" placeholder='write a caption.....'/>
    </div>
    </div>
  )
}

export default Createpost