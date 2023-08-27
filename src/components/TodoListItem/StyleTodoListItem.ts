import { styled } from "styled-components";

export const TodoListItemSection = styled.section`
  padding: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  &:nth-child(even){
    background: #f8f9fa;
  }
`
export const CheckBoxContainer = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  .text {
    margin-left: 0%.5rem;
    flex: 1;
  }
  &.checkd {
    svg {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
    }
  }
`
export const RemoveIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`