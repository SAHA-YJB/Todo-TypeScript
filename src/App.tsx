import React, { useState } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate/TodoTemplate";
import TodoInsert from "./components/TodoInsert/TodoInsert";
import TodoList from "./components/TodoList/TodoList";

export interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Hello",
      checked: true,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
