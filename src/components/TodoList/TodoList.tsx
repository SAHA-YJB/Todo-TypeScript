import TodoListItem from "../TodoListItem/TodoListItem";
import { TodoListSection } from "./StyleTodoList";
import { Todo } from "../../App";

export interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}

const TodoList = ({
  todos,
  removeTodo,
  toggleTodo,
  updateTodo,
}: TodoListProps) => {
  return (
    <TodoListSection>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
        />
      ))}
    </TodoListSection>
  );
};

export default TodoList;
