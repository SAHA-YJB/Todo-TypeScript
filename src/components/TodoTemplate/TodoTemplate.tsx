import React from "react";
import { TodoTemplateSection } from "./StyleTodoTemplate";
import { FiSun } from "react-icons/fi";

interface TodoTemplateProps {
  children: React.ReactNode;
  toggleDarkMode: () => void;
}

const TodoTemplate: React.FC<TodoTemplateProps> = ({
  children,
  toggleDarkMode,
}) => {
  return (
    <TodoTemplateSection>
      <h1>What Todo</h1>
      <FiSun className="sun-icon" onClick={toggleDarkMode} />
      <div>{children}</div>
    </TodoTemplateSection>
  );
};

export default TodoTemplate;
