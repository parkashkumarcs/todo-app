// Importing the react libraries, css files, and other components

import './todoStyle.css'
import { use, useState } from 'react';

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInput] = useState('');
    
    const handleClick = e => {
        e.preventDefault();

        if(inputValue.trim()){
            setTodoList([...todoList, inputValue]);
            setInput('');
        }

    }
  return (
    <div className="todo__Container">
      <h1 className="heading__1">
        T o<span className="do"> D o</span>
      </h1>
      <p className="faq__title">What's the plan for today?</p>
      <div className="input__Container" >
        <input 
            type="text" 
            placeholder='Write your new task?'
            onChange={e => setInput(e.target.value)}
        
        />
        <span>
            <button onClick={handleClick}>Add Task</button>
        </span>
      </div>


      <div className="display__Todo-list">
        <ul>

            {todoList.map((todo, index) =>(
                <li key={index}>{todo}</li>
            ))}
            {/* <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
