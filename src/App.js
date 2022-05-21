import React from 'react';
import logo from './logo.svg';
import Input from "./components/input";
import TodoItem from './components/TodoItem';
import './App.css';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';


function App() {
  const todoList = useSelector(selectTodoList);
   return (
    <div className="App">
      <div className="app__container">
        {todoList.map(item => (
          <TodoItem key={item.id} name={item.item} done={item.done} id={item.id} />
        ))}
        <div className="app__todoContainer"></div>
        <Input />
      </div>
      
    </div>
  );
}

export default App;
