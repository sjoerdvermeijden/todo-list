import React, { useState } from "react";

import Todo from "../Todo/Todo";
import Block from "../layout/Block/Block";
import Wrap from "../layout/Wrap/Wrap";

import { TodoWrapper } from "./style";

const groceryList = [];

const addItem = (e, setGroceries) => {
  e.preventDefault();

  const inputValue = e.target.childNodes[0];

  if (inputValue.value !== "") {
    groceryList.push(inputValue.value);
  }

  setGroceries([...groceryList]);

  inputValue.value = "";
};

function Todolist() {
  const [groceries, setGroceries] = useState([]);

  return (
    <>
      <Block>
        <Wrap>
          <form action="" onSubmit={(e) => addItem(e, setGroceries)}>
            <input type="text" name="todo" id="" />
            <input type="submit" value="Add item" />
          </form>
          <TodoWrapper>
            <ul>
              {groceries.map((item, index) => {
                return (
                  <li key={index}>
                    <Todo text={item} i={index} list={groceryList} setGroceries={setGroceries} />
                  </li>
                );
              })}
            </ul>
          </TodoWrapper>
        </Wrap>
      </Block>
    </>
  );
}

export default Todolist;
