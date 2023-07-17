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
// Without further decomposing into Task.js
//   return (
//     <ul>
//       {tasks.map((task) => {
//         return <li key={task.id}>{task.text}</li>;
//       })}
//     </ul>
//   );
};

export default Overview;