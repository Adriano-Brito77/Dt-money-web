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
    height: 27%;
    width: 40%;
    padding:10px;
    `
      : `
    min-height: 20%;
    height: auto;
    width: 50%;
    padding:20px;
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

  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 10px;
`;
export const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
  width: 100%;
  min-height: 85%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ContainerCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121214;
  max-height: 50%;
  width: 80%;
  color: #fff;
  border-radius: 5px;
  padding: 10px;
`;

export const ContainerP = styled.p`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: start;
  color: #fff;
  grid-column: 2;
  font-size: 24px;
`;
