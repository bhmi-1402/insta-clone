import React from 'react'
import "./Home.css";

function Home() {
  return (
    <div class="home">
      <div className='card'>
        <div className="card-header">
          <div className="card-pic">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
          </div>
          {/* <div className="card-content">

          </div> */}
        </div>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1446707052533-0e1d48e08aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        </div>
        <div className="card-content">
        <span class="material-symbols-outlined">
favorite
</span>
<p>1 Like</p>
<p>This is amazing</p>
        </div>
        <div className="add-comment">
        <span class="material-symbols-outlined">
mood
</span>
<input type="text" placeholder='Add a comment'/>
<button className='comment'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default Home