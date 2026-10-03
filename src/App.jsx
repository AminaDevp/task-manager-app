import { useState } from 'react'

import './index.css'

function App() {
     const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
   
    function toggleComplete(id){
      setTasks (tasks.map((task) => task.id === id ? {...task, completed:!task.completed }:task ))}
    function deleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id))
}
const remaining =tasks.filter((task)=>task.completed === false).length
    const items = tasks.map((task) => (
    <li key={task.id} className="flex justify-between items-center my-2">
      <span>{task.name}</span>
      <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
       /> 
      <button 
        onClick={() => deleteTask(task.id)} 
        className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  ))
  
     
 return (

    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
    
    <input
    type="text"
    placeholder="Add a new task..."
    value = {newTask}  
    onChange = {(e)=>{setNewTask(e.target.value)}}
    className= "border rounded px-3 py-2 w-full mb-2"
    />
    <button
      onClick={() =>{
         const newTaskObject = { id: Date.now(), name: newTask, completed: false }
       setTasks([...tasks,newTaskObject])
     setNewTask('') 
    } }
      className="bg-blue-500 text-white px-4 py-2 rounded w-full"
    >
    Add
   </button>
   
    <ul>
      {items}
      
       </ul>
       <p className="text-sm text-gray-500 mt-2">{remaining} tasks remaining</p>
    </div>
 )
 

}

export default App
