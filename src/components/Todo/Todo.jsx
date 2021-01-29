import React from "react";

import { TodoItem } from "./style";

const removeItem = (e) => {
  
}

function Todo({ text, i }) {
  return (
    <>
      <TodoItem>
        <div className="text">{text}{i}</div>
        <button>Remove</button>
      </TodoItem>
    </>
  );
}

export default Todo;
