import React from "react";
import { useState } from "react";
import Todo_Item from "./Todo_Item";

const Todo = () =>{
    const [todoState,setTodoTate]=useState([
        {
            id : 1,
            title : 'Việc 1',
            completed : false
        },
        {
            id :2,
            title : 'Việc 2',
            completed : false
        },
        {
            id: 3,
            title : 'Việc 3',
            completed : false
        }
           
    ])

    const markComplete = id =>{
        const newTodos = todoState.map(todo => {
            if(todo.id === id ){
                todo.completed =! todo.completed
                return todo
            }
        } )

        setTodoTate(newTodos)
    }



    // const allTodos = []

    // for(let todo of todoState){
    //     allTodos.push(<p>{todo}</p>)
    // }

    return(
       <div>
          {todoState.map(todo =>{ // map()
            return(
                <div>
                   <Todo_Item  todoProps= {todo} markCompleteFunc={markComplete}
                />  
                </div>
               
            )
            
            
          })}

        </div>
    )
}
export default Todo;
