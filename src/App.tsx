import React, { useCallback, useRef, useState } from "react";
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
  const nextId = useRef(1);
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback(
    (text: string) => {
      const newTodo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos([newTodo, ...todos]);
      nextId.current += 1;
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert addTodo={addTodo} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
