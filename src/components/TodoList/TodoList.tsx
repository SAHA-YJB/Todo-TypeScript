import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { TodoListSection } from "./StyleTodoList";
import { Todo } from "../../App";

export interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoList = ({ todos, removeTodo, toggleTodo }: TodoListProps) => {
  return (
    <TodoListSection>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </TodoListSection>
  );
};

export default TodoList;
