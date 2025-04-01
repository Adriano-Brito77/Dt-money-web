import styled from "styled-components";

interface ButtonProps {
  $variant?:
    | "primary"
    | "secondary"
    | "search"
    | "pages"
    | "category"
    | "confirm"
    | "delete"
    | "logout"
    | "reset"

  $isActive?: boolean;
  des?:boolean
  
}

export const Button = styled.button<ButtonProps>`
  color: #fff;
  

  ${({ $variant, $isActive,des }) =>
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
      aling-items: center;
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
      : $variant === "delete"
      ? `
      border-radius: 5px;
      width: 110px;
      background-color: #f44336;
      border:none; 
      `
      : $variant === "confirm"
      ? `
        border-radius: 5px;
        
        width: 110px;
        background-color: #00b37e;
        border:none;
      
      `
      :  $variant === "logout"
      ? `
        border-radius: 5px;
        display:flex;
        justify-content: space-evenly;        
        align-items: center;
        width: 98px;
        background-color:rgb(47, 47, 51);
        border:none;

        & svg{
        font-size:20px;
        }
      
        &:hover {
        background-color: #f44336;
        }
        &:disabled {
        opacity: 0.4;
      `
      : $variant === "reset"
      ? `
      background-color: #00b37e; 
      border:none;
      width: 190px;
      height: 50px;
      
      border-radius: 5px;
       ${des 
        ? `
        opacity: 0.3;
       pointer-events: none;
        
        ` : ""}

      &:hover {
        opacity: 0.8;
      }
      `:""}
`;
