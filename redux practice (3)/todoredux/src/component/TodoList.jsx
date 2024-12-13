import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./CreateTodo";

function TodoList() {
  const [text,setText] = useState("");

  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todos.value);
  console.log(todo);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleAdd}>Addlist</button>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
