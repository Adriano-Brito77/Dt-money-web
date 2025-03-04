import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  height: 10%;
  width: 28%;
  padding: 16px;
  background: #202024;
  border-radius: 10px;
  flex-direction: column;
  transition: 1s ease-in-out;
  color: #fff;
  gap: 42px;
`;

export const Containermodal = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: start;
`;
export const ContainerSvg = styled.div`
  display: flex;
  justify-content: start;
  height: 100%;
`;

export const HeaderCategory = styled.p`
  display: flex;
  margin: 0;
`;
export const ContainerTitle = styled.div`
  display: flex;
  align-items: start;
`;

export const ContainerButtonConfirm = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  justify-content: space-evenly;
`;
