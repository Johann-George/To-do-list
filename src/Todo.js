// TodoList.js
import React, { useState } from 'react';
import './TodoList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';


const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTaskDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container-fluid py-5 h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-6">

            <div className="card">
              <div className="card-body p-5">
                <h1 className="mb-4 text-center">To-Do List</h1>
                <form className="d-flex justify-content-center align-items-center mb-4"> 
                <div>
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    style={{margin:30}}
                  />
                  <button onClick={addTask} id="add-task" >ADD</button>
                </div>
                </form> 
              

                <div className='d-flex justify-content-center align-items-center mb-4'>
                <div id="task-container">
                <ul style={{ textAlign: 'center', padding: 0 ,listStyleType: 'none'}}>
                  {tasks.map((task, index) => (
                    <li key={index} id="task">
                      <span 
                        style={{ textDecoration: task.done ? 'line-through' : 'none', flex:1}}
                      >
                        {task.text}
                      </span >
                      <button onClick={() => toggleTaskDone(index)} className="btn btn-success" >
                        <FontAwesomeIcon icon={task.done ? faUndo : faCheck} />
                      </button>
                      <button onClick={() => deleteTask(index)} className="btn btn-danger">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </li>
                  ))}
                </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
