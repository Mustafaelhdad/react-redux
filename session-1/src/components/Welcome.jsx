import React from "react";

const Welcome = (props) => {
  console.log(props);

  return (
    <>
      <div>Hello, {props.name}</div>
      <p>Age: {props.age}</p>
      <p>Job Title: {props.job_title}</p>
    </>
  );
};

export default Welcome;
