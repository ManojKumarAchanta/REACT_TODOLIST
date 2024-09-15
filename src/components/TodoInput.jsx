import React, { useRef} from 'react'
import { useState } from 'react';

function TodoInput(props) {
  const {handleTodoList}=props;
  const {todoValue,setTodoValue}=props;
  return (
    <header>
      <input value={todoValue} onChange={event=>{setTodoValue(event.target.value)}} type="text" placeholder='Enter todo...' />
      <button onClick={()=>{handleTodoList(todoValue);setTodoValue("")}}>Add</button>
    </header>
  )
}

export default TodoInput
