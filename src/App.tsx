import { useCallback, useRef, useState } from "react";
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

  const removeTodo = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const toggleTodo = useCallback(
    (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const updateTodo = useCallback(
    (id: number, text: string) => {
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
      );
    },
    [todos]
  );
  return (
    <TodoTemplate>
      <TodoInsert addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
      />
    </TodoTemplate>
  );
}

export default App;
