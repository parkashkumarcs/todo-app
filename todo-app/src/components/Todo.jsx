// Importing the react libraries, css files, and other components

import './todoStyle.css'
import { useState } from 'react';

const Todo = () => {
    const [inputValue, setInput] = useState('');
  return (
    <div className="todo__Container">
      <h1 className="heading__1">
        T o<span className="do"> D o</span>
      </h1>
      <p className="faq__title">What's the plan for today?</p>
      <div className="input__Container">
        <input 
            type="text" 
            placeholder='Write your new task?'
            onChange={e => setInput(e.target.value)}
        
        />
        <span>
            <button>Add Task</button>
        </span>
      </div>
      <div className="display__Todo-list">
        <ul>
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
            <li>Just Sample of todo list diplay</li>
            <li>Just Sample of todo list diplay</li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
