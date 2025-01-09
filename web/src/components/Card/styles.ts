import styled from "styled-components";

interface CardProps { 
  variant?: "income" | "outcome" | "result"
  name?: string;
  value?: number;
  
}

export const ContainerCard = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: #b8bec4;
  width: 320px;
  height: 137px;
  border-radius: 5px;


  background-color: ${({ variant }) =>
      variant === "result" ? "#015F43": "#323238"
    };
`;

export const HeaderCard = styled.div<CardProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FooterCard = styled.div<CardProps>`
    display: flex;
    align-items: center;
    padding-top: 20px;
    justify-content: start;
    font-size: 40px;
    font-weight: bold;
    color: #E1E1E6;
    height: 50%;
`;


    



