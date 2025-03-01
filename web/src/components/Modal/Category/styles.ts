import styled from "styled-components";

interface modalProps {
  type: boolean;
}

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

export const ModalContent = styled.div<modalProps>`
  display: flex;
  ${(props) =>
    props.type
      ? `
    height: 30%;
    width: 40%;
    `
      : `
    height: 50%;
    width: 60%;
    padding: 10px;
    `};

  background: #202024;
  border-radius: 10px;
  flex-direction: column;
  transition: 1s ease-in-out;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  background: #202024;
  width: 90%;

  border-radius: 10px;
`;

export const Containermodal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
  width: 10%;
`;

export const HeaderCategory = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
`;

export const BodyCategory = styled.form`
  display: flex;
  height: 85%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 10px;
`;
export const CategoryList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  overflow-y: auto;
  align-items: center;
  justify-content: start;
  padding-left: 12px;
`;

export const ContainerCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121214;
  height: 10%;
  width: 28%;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
`;
