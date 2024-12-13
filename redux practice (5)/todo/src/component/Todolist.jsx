import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo , deleteTodo , addColor} from './TodoSlice'

function Todolist() {
    const [text,SetText] = useState("")
    const dispatch = useDispatch()

    const todo = useSelector((state) => state.todo.value)
    const handleAdd = () => {
        if(text.length > 0) {
            dispatch(addTodo(text))
            SetText("")
        }
    }

    const hanndleDelete = (index) => {
        dispatch(deleteTodo(index))
        
    }

    const handleColor = (index) => {
        dispatch(addColor({index:index , color:"red"}))
    }
 
  return (
    <div>
        <input type="text"  placeholder='Enter Todo' onChange={(e) => SetText(e.target.value)} value={text}/>
        <button onClick={handleAdd}>Addlist</button>
        {todo.map((item,index) => (
            <ul key={index}>
                <li style={{color:item.color}}>{item.text}<button onClick={() => hanndleDelete(index)}>Delete</button><button onClick={() => handleColor(index)}>Red</button></li>
            
            </ul>
        ))}
    </div>
  )
}

export default Todolist