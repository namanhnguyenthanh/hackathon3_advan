import React, { useState } from "react";

function Th4() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {taskList.map((task, i) => (
          <li key={i} style={{ color: "white" }}>
            {task}
          </li>
        ))}
      </ul>
      <input type="text" onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={() => setTaskList([...taskList, newTask])}>
        Add Task
      </button>
    </div>
  );
}

export default Th4;
