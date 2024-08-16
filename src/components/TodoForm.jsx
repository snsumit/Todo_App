import React, { useState } from 'react'

const TodoForm = ({onClickAddTodo}) => {
    const [inputValue, setInputValue] = useState({});
    const handleChange = (value) => {
      setInputValue({id:value,content:value,checked:false})
    }
    
  return (
    <section className='form'>
        <form className='input-form' onSubmit={(event) => onClickAddTodo(event , inputValue , setInputValue)} >
          <input type="text" 
          placeholder='Add a task' 
          autoComplete='off' 
          value={inputValue.content} 
          onChange={(event) => handleChange(event.target.value)} 
          />
          
          <button type='submit'>Add</button>

        </form>

        </section>
  )
}

export default TodoForm
