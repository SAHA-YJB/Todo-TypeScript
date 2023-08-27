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

const TodoListItem = () => {
  return (
    <TodoListItemSection>
      <CheckBoxContainer>
        <MdCheckBoxOutlineBlank />
        <div className="text">할 일</div>
      </CheckBoxContainer>
      <RemoveIcon>
        <MdRemoveCircleOutline />
      </RemoveIcon>
    </TodoListItemSection>
  );
};

export default TodoListItem;
