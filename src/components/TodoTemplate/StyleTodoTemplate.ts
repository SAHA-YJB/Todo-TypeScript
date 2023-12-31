import { styled } from "styled-components";

export const TodoTemplateSection = styled.header`
  max-width: 768px;
  width: 100%;
  margin: 6rem auto 0 auto;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  .sun-icon {
    position: absolute;
    top: 24px;
    right: 6px;
    padding: 1rem;
    scale: 1.5;
    cursor: pointer;
    color: #fff;
    &:hover {
      scale: 2;
      color: yellow;
    }
    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
  }
  h1 {
    background: #000;
    color: #fff;
    height: 6rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
  }
  div{
    background: #fff;
    color: #000;
  }
`