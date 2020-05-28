import React from 'react';
import './styles/Task.css'

const Task = (props) => {

    const handleDeleteTask = () => {
        // console.log(props.tasks)
        // props.setTasks(
        //     props.tasks.filter((element, props.index) => {
        //         element !== props.index
        //     })
    }

    const handleEditTask = () => {

    }

    return (
        <div className="task">
            <p>{props.task}</p>
            <button className='taskBtn edit' onClick={handleEditTask}>EDIT</button>
            <button className='taskBtn delete' onClick={handleDeleteTask}>DELETE</button></div>
    )

}

export default Task;