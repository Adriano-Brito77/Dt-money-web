import styled from "styled-components";
import Button from "../Button";

interface buttonprops {
  type: "income" | "outcome";
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
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #202024;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  height: 55%;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 28px;
  span {
    margin-top: 10px;
  }
`;

export const BodyModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 10px;
  margin-top: 40px;
`;

export const InputModal = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: none;
  background: #121214;
  color: #7c7c8a;
  font-size: 16px;
  outline: none;
  padding-left: 15px;
`;

export const SelectModal = styled.select`
  display: flex;
  width: 105%;
  height: 60px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: none;
  background: #121214;
  color: #7c7c8a;
  font-size: 16px;
  outline: none;
`;

export const StyledOption = styled.option`
  background-color: #121214;
  color: #7c7c8a;
  padding: 10px;
  outline: none;
  border-radius: 10px;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 470px;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ButtonModal = styled(Button)<buttonprops>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #29292e;
  color: #c4c4cc;
  border-radius: 10px;
  border: none;
  width: 212px;
  height: 58px;
  gap: 10px;

  &:active {
    background-color: "#00b37e";
  }
`;

export const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  width: 470px;
`;
