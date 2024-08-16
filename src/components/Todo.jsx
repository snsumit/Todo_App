import React, { useState } from 'react'
import TodoForm from './TodoForm'
import "./Todo.css"
import TodoList from './TodoList';
const Todo = () => {
  const [task, setTask] = useState(()=>{
    const rawData = localStorage.getItem("reactTodo");
    if(!rawData) return [];
    return JSON.parse(rawData)
  });

  
  



  const handleCheckButton = (content) =>{
        const updatedTask = task.map((currElem) =>{
             if(currElem.content === content){
              return { ... currElem , checked: !currElem.checked};
             }else{
               return currElem;
             }
             
         
        })
        setTask(updatedTask);
     
     

  }
 
  const handleFromSubmit = (e , inputValue , setInputValue) => {
    e.preventDefault();
    const {id , content , checked} = inputValue;
   
  
    if(!content) return;
    const isTaskAvailable = task.find((currElem) => currElem.content === content);
    if(isTaskAvailable) return;
    setTask((previous) => [...previous,{id:id,content:content,checked:false}])
    setInputValue({id:"",content:"",checked:false});

   }

   localStorage.setItem("reactTodo",JSON.stringify(task));

  const handleDeleteBtn = (value) => {
    const updatedTask = task.filter((currElem) => currElem.content !== value)
    
    setTask(updatedTask);
    
    
  }

  const handleClearButton = () => {
    setTask([]);
  }



  return (
    <div >
      <h1 className='heading'>To-do List App</h1>
      <TodoForm onClickAddTodo={handleFromSubmit} />
      <section className='item-list'>
        <ul>
          {
            task.map((currElem) => {
              return (
                <TodoList key={currElem.id} currElem={currElem.content} onClickDeleteTodo={handleDeleteBtn} onClickHandleCheckButton={handleCheckButton} checked={currElem.checked}/>
              )

            })
          }

        </ul>
      </section>
      <button className='clearBtn' onClick={handleClearButton}>Clear All</button>
    </div>
  )
}

export default Todo
