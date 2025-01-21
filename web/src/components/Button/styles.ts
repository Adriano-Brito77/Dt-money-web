import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary" | "search" | "pages";
}

export const Button = styled.button<ButtonProps>`
  color: #fff;
  border-radius: 5px;

  ${({ variant }) =>
    variant === "primary"
      ? `
      background-color: #00b37e; 
      border:none;
      width: 190px;
      height: 50px;
      font-size: bold;

      &:hover {
        opacity: 0.8;
      }
      `
      : variant === "secondary"
      ? `
      background-color: #00b37e; 
      border:none;
      width: 438px;
      height: 58px;

      &:hover {
        opacity: 0.8;
      }
      `
      : variant === "search"
      ? `
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background-color: #202024;
      color: #00b37e;
      border: 1px solid #00b37e;

      width: 147px;
      height: 54px;


      &:hover {     
        background-color:#00b37e;
        border: none;
        color: #fff;
      }

      `
      : variant === "pages"
      ? `   
      background-color: #00b37e; 
      border:none;
      width: 100px;
      height: 50px;
      font-size: bold;
    

      &:hover {
        opacity: 0.8;
      }
      &:disabled {
      opacity: 0.4;
  }

      `
      : ""}
`;
