import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addNewTask = () => {
    const task ={
      id:  tasksList.length === 0 ? 1:tasksList[tasksList.length - 1].id + 1 ,
      taskName : newTask,
      completed: false,

    };
    setTasksList([...tasksList, task])
  };

  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };
  
   const completeTask = (id) => {
    
   setTasksList( tasksList.map((task) => {
      if (task.id === id){
        return {...task, completed: true};
      } else {
        return task;
      }
    })
   );
   }

  return (
    <div className='App'>
      <div className='addTask'>
      <input onChange={handleInputChange} />
      <button onClick={addNewTask}>Add Task</button>
      </div>
      

      <div className='list'>
        {tasksList.map((task) => {
          return <Task 
          taskName={task.taskName} 
          id={task.id} 
          completed={task.completed}
          deleteTask={deleteTask}
          completeTask={completeTask}
          />
        })}
      </div>
    </div>
  );
}

export default App;
