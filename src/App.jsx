
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import { useState,useEffect } from 'react';
function App() {
  const [todos,setTodo]=useState([]);
  const [todoValue,setTodoValue]=useState("");

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }
  const handleTodoList =(newTodo)=>{
    const newTodoList = [...todos,newTodo];
    persistData(newTodoList);
    setTodo(newTodoList);
  }
  const handleDeleteTodo=(index)=>{
    const newTodoList=todos.filter((todo,todoIndex)=>{
      return todoIndex!=index;
    })
    persistData(newTodoList);

    setTodo(newTodoList);
  }
  const handleEditTodo=(index)=>{
    const valueToBeEdited=todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }
  useEffect(()=>{
    if(!localStorage){
      return ;
    }

    let localTodos = localStorage.getItem('todos');
    if(!localTodos){
      return;
    }
    localTodos=JSON.parse(localTodos).todos;
    setTodo(localTodos);

  },[]);
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleTodoList={handleTodoList}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/>
    </>
  )
}

export default App
