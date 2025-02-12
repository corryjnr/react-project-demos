import { useState } from 'react'
import './todo-styles.css'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos(todos.concat({
            id: Math.floor(Math.random() * 100),
            todo: input
        }))
        setInput('')
    }

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id))
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={input}
                    placeholder='New todo'
                    onChange={e => setInput(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
            <div className='todos-list'>
                <ul className='todos'>
                    {todos.map(({ id, todo }) => (
                        <li className='todo' key={id}>
                            <span>{todo}</span>
                            <button className='close' onClick={() => removeTodo(id)}>x</button>
                        </li>
                    ))}

                </ul>
            </div >
        </div >
    )
}

export default Todo