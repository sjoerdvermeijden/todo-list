import React from "react";

import { TodoItem } from "./style";

const removeItem = (e, i) => {
}

function Todo({ text, i }) {
  return (
    <>
      <TodoItem>
        <div className="text">{text}{i}</div>
        <button onClick={(e) => removeItem(e, i)}>Remove</button>
      </TodoItem>
    </>
  );
}

export default Todo;
