import styled from "styled-components";

interface TransactionProps {
  type: "income" | "outcome";
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Search = styled.input`
  outline: none;
  background-color: #121214;
  color: #7c7c8a;
  width: 100%;
  height: 56px;
  padding-left: 10px;

  border-radius: 5px;
  border: none;

  font-size: large;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
`;

export const Transaction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;  
  margin-top: 24px;
  span {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 0.5fr;
    justify-items: start;
    align-items: center;
    padding: 10px;
    color: #fff;
    background-color: #323238;
    
    border-radius: 5px;
    
  }
  p {
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
   
`;

export const WrapperPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 16px;
  margin-top: 15px;
`;

export const PStyles = styled.p<TransactionProps>`

    font-size: 16px;
    font-weight: 0;
    color:${({ type }: TransactionProps) =>
    type === "income" ? "#00B37E" : "#ff4b4b"};
   
`
