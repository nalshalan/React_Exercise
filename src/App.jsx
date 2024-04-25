import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState(["Eat", "Sleep", "Study", "Exercise"]);

  function handleSubmit(event) {
    event.preventDefault();
    setToDoList([...toDoList, inputText]);
  }

  return (
    <div>
      <h1>React State Exercise</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="toDoInput">Enter a new task</label>
        <input 
          type="text" 
          name="toDoInput" 
          id="toDoInput" 
          value={inputText}
          onChange ={(event) => setInputText(event.target.value)}
        />
        <button>Enter</button>
      </form>
      <ul>
        {toDoList.map((element, index) => {
          return <li key={index}>{element}</li>
        })}
      </ul>
    </div>
  )
}

export default App
