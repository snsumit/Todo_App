import React, { useState } from 'react'

const From = () => {

const [name , setName ] = useState("")

function handleFormSubmit(e){
  e.preventDefault()
  console.log(name)
 
}
const  handleChange = (value) =>{
 
 setName(value)

}

  return (
    <div>
         <form onSubmit={handleFormSubmit}>
                <label htmlFor="Name">
                    Name:
                </label>
                <input type="text" id='input_text' value={name}  onChange={(e)=> handleChange(e.target.value) }/>
                <button type='submit'>Submit</button>

         </form>
    </div>
  )
}

export default From
