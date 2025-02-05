import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  height: 50%;
  width: 40%;
  background: #202024;
  border-radius: 10px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  background: #202024;
  width: 90%;
  height: 10%;
  border-radius: 10px;
`;

export const Containermodal = styled.div`
  display: flex;
  justify-content: center ;
  align-items: center;
  color:#fff;
  font-size: 28px;
  width: 10%;
  height: 10%;
  
`;
