import React from "react";

const ToDo = ({todo, handleToggle }) => {
    const handleClick = (e) => {
      e.preventDefault()
      handleToggle(e.currentTarget.id)
    }
    return (
        <div id ={todo.id} className={todo.complete ? 'todo strike' : 'todo'} onClick={handleClick}>
            {todo.task}
        </div>
    )
}

export default ToDo;