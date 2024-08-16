import React, { useState } from 'react'
import "./Todo.css"

const TodoList = ({ key ,currElem ,onClickDeleteTodo, onClickHandleCheckButton , checked}) => {
  
  

 
    return (

    <li>
    <span className={checked ? "checked" :"notChecked"}>{currElem}</span>
    <div className='item-btn'>
      <button className='btn1' onClick={() => onClickHandleCheckButton(currElem)}>done</button>
      
      <button className='btn2' onClick={(event) => onClickDeleteTodo(currElem)} >delete</button>
    </div>
  </li>

  )
}

export default TodoList
