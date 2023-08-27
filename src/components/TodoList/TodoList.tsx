import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { TodoListSection } from "./StyleTodoList";
import { Todo } from "../../App";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <TodoListSection>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </TodoListSection>
  );
};

export default TodoList;
