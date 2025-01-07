import styled from "styled-components";


interface ButtonProps { 
  variant?: "primary" | "secondary" | "search"; 
}

export const Button = styled.button<ButtonProps>`
  color: #fff;
  border-radius: 5px;
 

 ${({ variant }) =>
    variant === "primary" ? `
      background-color: #00b37e; 
      border:none;
      width: 150px;
      height: 50px;
      font-size: bold;
      ` 
      : 
    variant === "secondary" ? `
      background-color: #00b37e; 
      border:none;
      width: 438px;
      height: 58px;
      ` 
      :
    variant === "search" ? `
    background-color: #0000; 
    border: 1px solid #00b37e; 
    color:#00b37e; 

    &:hover {
    color: #fff;
    }
    ` 
    : 
    "#FFFFFF"};


  &:hover {
    background-color: #00b37e;
  }
`;



