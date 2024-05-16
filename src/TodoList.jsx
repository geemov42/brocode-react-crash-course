import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
  const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower"]);
  const [newTask, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addTask() {
    setTasks(t => [...t, newTask]);
    setNewTasks('');
  }

  function deleteTask(index) {
    setTasks(t => t.filter((_, tIdx) => tIdx !== index));
  }

  function moveTaskUp(index) {

    if (index > 0) {
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
        setTasks(updatedTask);
    }
  }

  function moveTaskDown(index) {

    if (index < tasks.length - 1) {
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
        setTasks(updatedTask);
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask} disabled={!newTask.trim().length}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>Move Up</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>Move Down</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

TodoList.propTypes = {};

export default TodoList;
