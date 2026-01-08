import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodos = todos.slice()
      newTodos.push({ id: Date.now(), text: inputValue, completed: false })
      setTodos(newTodos)
      setInputValue('')
    }
  }

  const toggleTodo = (id) => {
    const newTodos = todos.slice()
    const index = newTodos.findIndex(todo => todo.id === id)
    if (index !== -1) {
      newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed }
    }
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="todo-container">
      <h1>To-Do</h1>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button onClick={addTodo} className="add-btn">+</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)} className="delete-btn">×</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
