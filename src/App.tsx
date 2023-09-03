import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate/TodoTemplate";
import TodoInsert from "./components/TodoInsert/TodoInsert";
import TodoList from "./components/TodoList/TodoList";
import { useRecoilState } from "recoil";
import { darkModeState } from "./recoil/darkmode/atoms";

export interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

function App() {
  const nextId = useRef(1);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

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
    <>
      <div className={isDarkMode ? "dark-mode" : ""}>
        <TodoTemplate toggleDarkMode={toggleDarkMode}>
          <TodoInsert addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </TodoTemplate>
      </div>
    </>
  );
}

export default App;
