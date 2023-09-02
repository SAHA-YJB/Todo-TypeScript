import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import {
  CheckBoxContainer,
  RemoveIcon,
  TodoListItemSection,
} from "./StyleTodoListItem";
import { Todo } from "../../App";

export interface TodoListItemProps {
  todo: Todo;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoListItem = ({ todo, removeTodo, toggleTodo }: TodoListItemProps) => {
  const { id, text, checked } = todo;

  return (
    <TodoListItemSection>
      <CheckBoxContainer onClick={() => toggleTodo(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </CheckBoxContainer>
      <RemoveIcon onClick={() => removeTodo(id)}>
        <MdRemoveCircleOutline />
      </RemoveIcon>
    </TodoListItemSection>
  );
};

export default TodoListItem;
