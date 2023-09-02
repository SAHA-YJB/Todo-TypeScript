import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import { TodoInsertForm } from "./StyleTodoInsert";

export interface TodoInsertProps {
  addTodo: (text: string) => void;
}

const TodoInsert = ({ addTodo }: TodoInsertProps) => {
  const [inputValue, setInputValue] = useState<string>();

  const valueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const onAddTodo = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      if (inputValue) {
        addTodo(inputValue);
        setInputValue("");
      }
      e.preventDefault();
    },
    [addTodo, inputValue]
  );

  return (
    <TodoInsertForm onSubmit={onAddTodo}>
      <input
        name="inputValue"
        value={inputValue}
        onChange={valueChange}
        placeholder="할 일을 입력해주세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </TodoInsertForm>
  );
};

export default TodoInsert;
