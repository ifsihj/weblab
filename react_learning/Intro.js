import React from "react";
const Intro = (props) => {
  return (
    <div>
      <p>
        Studies at <b>{props.education}</b>
      </p>
      <p>
        From <b>{props.city}</b>
      </p>
    </div>
  );
};

export default Intro;
