import styled from "styled-components";

interface CardProps { 
  variant?: "income" | "outcome" | "result"
  name?: string;
  value?: number;
  
}

export const ContainerCard = styled.div`
  display: flex;
  padding: 20px;
  background-color: #323238;
  color: #b8bec4;
  width: 320px;
  height: 137px;
  border-radius: 5px;
`;

export const HeaderCard = styled.div<CardProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FooterCard = styled.div<CardProps>`

`;
