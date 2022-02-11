import React from "react";
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, }) =>{
   
    return(
        <div className="todo-container">
            
          {toDoList.map((todo)=>{
              return <ToDo todo={todo} handleToggle={handleToggle}  className='todos'/>
          })}
          
        </div>
    )
}

export default ToDoList;