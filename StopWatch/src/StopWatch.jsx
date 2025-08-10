import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((preTime) => preTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        {time}
      </div>
      <button
        style={{
          textAlign: "center",
          display: "block",
          margin: "20px auto 0 auto",
        }}
        onClick={() => {
          setTime(0);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default StopWatch;
