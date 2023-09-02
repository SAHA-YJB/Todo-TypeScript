import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdEditSquare,
} from "react-icons/md";
import {
  CheckBoxContainer,
  RemoveIcon,
  TodoListItemSection,
  TodoListUpdateText,
} from "./StyleTodoListItem";
import { Todo } from "../../App";
import React, { useEffect, useState } from "react";

export interface TodoListItemProps {
  todo: Todo;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}
const TodoListItem = ({
  todo,
  removeTodo,
  toggleTodo,
  updateTodo,
}: TodoListItemProps) => {
  const [updateToggle, setUpdateToggle] = useState<boolean>(false);
  const [updateInputValue, setupdateInputValue] = useState<string>("");
  const { id, text, checked } = todo;
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (updateToggle && inputRef.current) {
      inputRef.current.focus();
    }
  }, [updateToggle]);

  const onToggleUpdate = () => {
    setUpdateToggle(!updateToggle);
    inputRef.current?.focus();
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setupdateInputValue(e.target.value);
  };
  const enterUpdate = (e: any) => {
    if (e.key === "Enter") {
      updateTodo(id, updateInputValue);
      setUpdateToggle(false);
    }
  };
  return (
    <TodoListItemSection>
      <CheckBoxContainer onClick={() => toggleTodo(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        {updateToggle ? (
          <TodoListUpdateText
            ref={inputRef}
            type={"text"}
            value={updateInputValue}
            onChange={onChange}
            onKeyDown={enterUpdate}
          />
        ) : (
          <div className="text">{text}</div>
        )}
      </CheckBoxContainer>
      <MdEditSquare
        style={{ cursor: "pointer", scale: "1.5", marginRight: "10px" }}
        onClick={() => {
          onToggleUpdate();
          updateTodo(id, updateInputValue);
        }}
      >
        수정
      </MdEditSquare>
      <RemoveIcon onClick={() => removeTodo(id)}>
        <MdRemoveCircleOutline />
      </RemoveIcon>
    </TodoListItemSection>
  );
};

export default TodoListItem;
