import React from "react";
import { TodoTemplateSection } from "./TodoTemplateStyle";

interface TodoTemplateProps {
  children: React.ReactNode;
}

const TodoTemplate: React.FC<TodoTemplateProps> = ({ children }) => {
  return (
    <TodoTemplateSection>
      <h1>What Todo</h1>
      <div>{children}</div>
    </TodoTemplateSection>
  );
};

export default TodoTemplate;
