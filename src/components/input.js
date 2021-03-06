import React, { useState } from 'react';
import "./input.css";
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';

function Input() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const addTodo = () => {
        dispatch(saveTodo({
            item: input,
            id: Date.now(),
            done: false
        }));
        setInput("");
    }
  return (
    <div className='input'>
        <input type={"text"} value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={addTodo} >Add</button>
    </div>
  )
}

export default Input;