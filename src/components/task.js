import React from "react";

//functional component
const Task = (props) => {
  const { id, text } = props;

  return (
    <li key={id}>{text}</li>
  );
};

export default Task;