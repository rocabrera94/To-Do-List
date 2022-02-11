import React,{useState} from "react";


const ToDoForm = ({addTask, handleFilter}) => {
  const [input, setInput] = useState('');
  const handleChange = (e) => {
      setInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      addTask(input);
      setInput('');
  }

    return(
        <div>
            <form onSubmit={handleSubmit}>
              <input value={input} type='text' placeholder="Add new task" onChange={handleChange} />
              <button className="submit-btn">ADD</button> 
              <button onClick={handleFilter} className='clear-btn'>Clear completed</button>
            </form>
        </div>
    )
}

export default ToDoForm;