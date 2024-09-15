import React, { useState } from 'react'
import TodoCard from './TodoCard';

function TodoList(props) {
  const {todos}=props;
  return (
    <ul className='main'>
      {todos.map((ele,index)=>{
        return <TodoCard {...props} index={index} key={index}><p>{ele}</p></TodoCard>
      })}
    </ul>
  )
}

export default React.memo(TodoList);
