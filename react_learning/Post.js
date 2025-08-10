import React, { useState } from "react";
const Post = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="Post">
      <h3>{props.name}</h3>
      <p>{props.text}</p>
      <button
        onClick={() => {
          setIsLiked(!isLiked);
        }}
      >
        {isLiked ? "Liked" : "Like"}
      </button>
    </div>
  );
};

export default Post;
