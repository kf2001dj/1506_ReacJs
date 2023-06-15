import React from "react";
import Todo from "./Todo";
// import { ReactPropTypes } from "react";
import PropTypes from 'prop-types'
const Todo_Item = props => { 
    const markComplete = props.markCompleteFunc
    const todo = props.todoProps

    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom : '1px #ccc dotted',
        textDecoration : todo.completed ? 'line-through' :'none'
    }
    const deleteButtonStyle = {
        // background: '#ff0000',
        color :'#fff',
        //  border : 'none',
        // padding: '5px 9px',
        // boderRadius:'50%',
        // curor : 'pointer', 
        float :'right'

    }

    return (
       <div style={todoItemStyle}>
        <input type="checkbox"  ></input>
        {todo.title}
        <button style={deleteButtonStyle} >Delete</button>
       </div>
    )
}
export default Todo_Item;
Todo_Item.prototype = {
    todoProps: PropTypes.object.isRequired ,
    markCompleteFunc: PropTypes.func.isRequired
}

