import styled from "styled-components";

interface ButtonProps {
  $variant?: "primary" | "secondary" | "search" | "pages" | "category";

  $isActive?: boolean;
}

export const Button = styled.button<ButtonProps>`
  color: #fff;

  ${({ $variant, $isActive }) =>
    $variant === "primary"
      ? `
      background-color: #00b37e; 
      border:none;
      width: 190px;
      height: 50px;
      font-size: bold;
      border-radius: 5px;

      &:hover {
        opacity: 0.8;
      }
      `
      : $variant === "secondary"
      ? `
      background-color: #00b37e; 
      border:none;
      width: 438px;
      height: 58px;
      border-radius: 5px;

      &:hover {
        opacity: 0.8;
      }
      `
      : $variant === "search"
      ? `
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      background-color: #202024;
      color: #00b37e;
      border: 1px solid #00b37e;
      border-radius: 5px;

      width: 147px;
      height: 54px;


      &:hover {     
        background-color:#00b37e;
        border: none;
        color: #fff;
      }

      `
      : $variant === "pages"
      ? `   
      background-color: #00b37e; 
      border:none;
      width: 120px;
      height: 50px;
      font-size: bold;
      border-radius: 5px;
    

      &:hover {
        opacity: 0.8;
      }
      &:disabled {
      opacity: 0.4;
  }

      `
      : $variant === "category"
      ? `   
      display:flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
      background-color: #202024; 
      width:40%;
      height: 50px;
      font-weight: 500;
      font-size: 28px;
      
      border-color:${
        $isActive
          ? "transparent transparent #00b37e transparent "
          : "transparent"
      };

      
    

      &:hover {
        opacity: 0.8;
      }
      &:disabled {
      opacity: 0.4;
  }

      `
      : ""}
`;
