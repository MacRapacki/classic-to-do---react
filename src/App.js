import React from 'react';
import './styles/App.css';
import List from './List';
import { useState } from 'react';




function App() {

  const [tasks, setTasks] = useState([5, 6, 7])
  const [description, setDescription] = useState("")

  const handleAddTask = () => {
    if (description === "") {
      alert('type something')
    } else {
      setTasks((prevTasks) => {
        // return [...prevTasks, [...description]]
        return prevTasks.concat([description])
      }
      );
      setDescription("")
      console.log(description)
    }
  }

  const handleInputValue = (event) => {
    setDescription(event.target.value)

  }


  return (
    <div className="App">
      <div className="wrapper">
        <input type="text" placeholder="Type new Task" value={description} onChange={handleInputValue} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <List tasks={tasks} description={description} setTasks={setTasks} />

    </div >
  );
}

export default App;
