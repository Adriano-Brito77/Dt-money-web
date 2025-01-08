import styled from "styled-components";



export const Wrapper = styled.div`
  display: flex;
  background-color: #202024;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  padding: 24px 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #121214 50%, #202024 30%);
  width: 100%;
  height: 250px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
`;

export const WrapperCard = styled.div`
  display: flex;  
  width: 100%;
  max-width: 80%;
  justify-content: space-between;
 
  
`;

export const HeaderCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;



