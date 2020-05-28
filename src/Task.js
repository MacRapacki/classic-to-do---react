import React from 'react';
import './styles/Task.css'

const Task = (props) => {

    const handleDeleteTask = () => {
        const newArr = [...props.arr];
        newArr.splice(props.index, 1);
        props.setTasks(newArr)

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