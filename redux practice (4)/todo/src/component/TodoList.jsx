import React, { useState } from 'react'
import {useSelector , useDispatch} from "react-redux"
import { addTodo , editTodo } from './CreateSlice'


function TodoList() {
    const [text, setText] = useState("");
    const [editText, setEditText] = useState({id:"",text:""});
    const[editToggle,setEditToggle]=useState(false)

    const ToDo = useSelector((state) => state.todos.value)

    const dispatch = useDispatch()

    const handleClik = () => {
       dispatch(addTodo(text))
       setText("")
    }

    const handleEdit = (idx) => {
        setEditToggle(true)
        setEditText({id:idx,text:ToDo[idx]})


     
       
    }
    const handleModify = () => {

        console.log(editText);
        dispatch(editTodo(editText))
        setEditText({id:"",text:""})
        setEditToggle(false)
    }
   


  return (
    <div>
        <input type="text"  placeholder='Enter ToDo' onChange={(e) => setText(e.target.value) } value={text}/>
        <button onClick={handleClik}>AddList</button>
        {editToggle && <input type="text"  placeholder='Enter ToDo' onChange={(e) => setEditText({...editText,text:e.target.value}) } value={editText.text}/>}
        {editToggle && <button onClick={handleModify}>Modfy</button>}

        <ul>
        {ToDo.map((itm,idx) => (
         <li key={idx}>{itm} <button onClick={() => handleEdit(idx)}>edit</button> <button>Delete</button></li>
        ))}
        </ul>
    </div>
  )
}

export default TodoList