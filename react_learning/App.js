import React from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Photos from "./Photos";
import Post from "./Post";

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Intro education="Peking Universuty" city="Beijing" />
        <Photos
          links={[
            "pic1.jpg",
            "pic2.jpg",
            "pic3.jpg",
            "pic4.jpg",
            "pic5.jpg",
            "pic6.jpg",
            "pic7.jpg",
          ]}
        />
      </div>
      <Post name="Kenneth Choi" text="Sign up for web lab!" />
    </div>
  );
};

export default App;
