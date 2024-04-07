
import React, {useState} from 'react';
function ToDoList(){
  const [tasks, setTasks] = useState([]);

  function handleAddTask(){
    const newTask = document.getElementById('new-task').value;
    document.getElementById('new-task').value = "";
    setTasks([...tasks, newTask])
  }
  function handleDeleteTask(index){
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function handleUpTask(index){
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
    
  }

  function handleDownTask(index){
    if (index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }




  return(<div className='container'>
            <h2 className='title'>To-Do-List</h2>
            <input className='input-entry' id='new-task' type="text" placeholder='Enter a task ...' />
            <button className='add-button' onClick={handleAddTask}>Add</button>

            <ul>
              {tasks.map((task, index) => <li key={index} className='added-list'>
                    {task}
                    <button className='delete-button' onClick={() => handleDeleteTask(index)}>Delete</button>

                    <button className='move-button' onClick={() => handleUpTask(index)}>👆</button>
                    <button className='move-button' onClick={() => handleDownTask(index)}>👇</button>
              </li>)}
            </ul>
        
        </div>);
}

export default ToDoList