import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { TodoListSection } from "./StyleTodoList";

const TodoList = () => {
  return (
    <TodoListSection>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </TodoListSection>
  );
};

export default TodoList;
