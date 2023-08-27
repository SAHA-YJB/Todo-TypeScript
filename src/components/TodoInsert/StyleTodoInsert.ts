import { styled } from "styled-components";

export const TodoInsertForm = styled.form`
  display: flex;
  background: #fff;
  border-bottom: 2px solid;
  input {
    background: #fff;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size:1.125rem;
    line-height:1.5;
    color: #000;
    &::placeholder{
      color: #000;
    }
    flex: 1;
  }
  button {
    background: #000;
    outline: none;
    border-left: 2px solid #FFF;
    padding: 0 1rem;
    font-size:1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    transition: 0.1s background-color ease-in;
    &:hover {
      background-color: #adb5bd;
    }
  }
`