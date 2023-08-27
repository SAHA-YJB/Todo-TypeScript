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

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
  const { text, checked } = todo;

  return (
    <TodoListItemSection>
      <CheckBoxContainer>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </CheckBoxContainer>
      <RemoveIcon>
        <MdRemoveCircleOutline />
      </RemoveIcon>
    </TodoListItemSection>
  );
};

export default TodoListItem;
