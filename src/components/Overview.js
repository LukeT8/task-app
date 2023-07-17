import React from "react";
import Task from "./task";

//functional component
const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => ( //.map guide https://www.youtube.com/watch?v=5llXA0RTYIU
        <Task id={task.id} text={task.text}/>
      ))}
    </ul>
  );
};

export default Overview;