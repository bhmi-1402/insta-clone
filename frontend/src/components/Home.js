import React from 'react'
import "./Home.css";

function Home() {
  return (
    <div className='home'>
      <div className="card">
            {/* card header */}
            <div className="card-header">
              <div className="card-pic">
                {/* <img
                  src={posts.postedBy.Photo ? posts.postedBy.Photo : picLink}
                  alt=""
                /> */}
              </div>
              <h5>
                {/* <Link to={`/profile/${posts.postedBy._id}`}>
                  {posts.postedBy.name}
                </Link> */}
              </h5>
            </div>
            {/* card image */}
            <div className="card-image">
              {/* <img src={posts.photo} alt="" /> */}
            </div>

            {/* card content */}
            <div className="card-content">
              {/* {posts.likes.includes(
                // JSON.parse(localStorage.getItem("user"))._id
              ) ? (
                <span
                  className="material-symbols-outlined material-symbols-outlined-red"
                  onClick={() => {
                    // unlikePost(posts._id);
                  }}
                >
                  favorite
                </span>
              ) : (
                <span
                  className="material-symbols-outlined"
                  onClick={() => {
                    // likePost(posts._id);
                  }}
                >
                  favorite
                </span>
              )} */}

              {/* <p>{posts.likes.length} Likes</p> */}
              {/* <p>{posts.body} </p> */}
              <p
                style={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={() => {
                  // toggleComment(posts);
                }}
              >
                View all comments
              </p>
            </div>

            {/* add Comment */}
            <div className="add-comment">
              <span className="material-symbols-outlined">mood</span>
              <input
                type="text"
                placeholder="Add a comment"
                // value={comment}
                onChange={(e) => {
                  // setComment(e.target.value);
                }}
              />
              <button
                className="comment"
                onClick={() => {
                  // makeComment(comment, posts._id);
                }}
              >
                Post
              </button>
            </div>
          </div>
        
      

    </div>
  )
}

export default Home