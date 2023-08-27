import React from "react";
import { MdAdd } from "react-icons/md";
import { TodoInsertForm } from "./StyleTodoInsert";

const TodoInsert = () => {
  return (
    <TodoInsertForm>
      <input placeholder="할 일을 입력해주세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </TodoInsertForm>
  );
};

export default TodoInsert;
