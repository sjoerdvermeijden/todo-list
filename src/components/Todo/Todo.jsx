import React from "react";
import { TodoItem } from "./style";

const removeItem = (e, i, list, setGroceries) => {
  console.log('test')

  list.splice(i, 1)
  setGroceries([...list])
}

function Todo({ text, i, list, setGroceries }) {
  return (
    <>
      <TodoItem>
        <div className="text">{text}</div>
        <button onClick={(e) => removeItem(e, i, list, setGroceries)}>Remove</button>
      </TodoItem>
    </>
  );
}

export default Todo;
