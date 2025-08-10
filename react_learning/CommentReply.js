import React, { useState } from "react";

const CommentReply = (props) => {
  const [isLiked, setIsLiked] = usestate(false);

  return (
    <div className="comment-text">
      <h5>{props.name}</h5>
      <p>{props.content}</p>
      <p>{isLiked ? "Liked" : "Like"}</p>
    </div>
  );
};

export default CommentReply;
