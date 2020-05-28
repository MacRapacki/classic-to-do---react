import React from 'react';
import Task from './Task';

// let keyNumber = 1;



const List = (props) => {

    return (
        props.tasks.map((task, index) => {
            return <Task key={index} task={task} arr={props.tasks} setTask={props.setTasks} index={index} tasks={props.tasks} />
        })
        // props.tasks.map(element => {
    )


}
export default List;