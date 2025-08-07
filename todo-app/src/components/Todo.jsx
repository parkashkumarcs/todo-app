// Importing the react libraries, css files, and other components

import './todoStyle.css'

const Todo = () => {
  return (
    <div className="todo__Container">
      <h1 className="heading__1">
        To<span className="do">Do</span>
      </h1>
      <p className="faq__title">What's the plan for today?</p>
      <div className="input__Container">
        <input type="text" />
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
        </ul>
      </div>
    </div>
  );
};

export default Todo;
