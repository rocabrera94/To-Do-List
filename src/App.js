import React,{useState} from 'react'
import Header from './Header';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import './App.css';
import data from './data.json';
function App() {

  const [toDoList, setToDoList] = useState(data);
  
  const handleToggle = (id) => {
    let mapped = toDoList.map((task)=>{
      return (id === task.id ? {...task, complete: !task.complete} : {...task} )
    })
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete
    })
    setToDoList(filtered);
  }

  const addTask = (input) => {
    let copy = [...toDoList];
    copy = [...copy,{id: toDoList.length + 1, task: input, complete: false}]
    setToDoList(copy)
  }

  return (
    <div className="App">
      <Header />
      <div className='main-container'>
        <ToDoForm addTask={addTask} handleFilter={handleFilter}/>
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      </div>
    </div> 
  );
}

export default App;
