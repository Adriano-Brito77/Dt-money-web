import styled from "styled-components";

interface buttonprops {
  type: "income" | "outcome";
  isActive: boolean;
}

interface inputprops {
  height: "large" | "register" | "medium" | "small";
}

export const ButtonModal = styled.button<buttonprops>`
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

  background-color: ${(props) =>
    props.type === "income"
      ? props.isActive
        ? "#00A37A"
        : "#29292e"
      : props.type === "outcome"
      ? props.isActive
        ? "#e83f5b"
        : "#29292e"
      : ""};
  color: ${(props) =>
    props.type === "income"
      ? props.isActive
        ? "#FFF"
        : "#c4c4cc"
      : props.type === "outcome"
      ? props.isActive
        ? "#FFF"
        : "#c4c4cc"
      : ""};
`;

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

export const ModalContent = styled.form`
  background: #202024;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  height: 52%;
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

export const InputModal = styled.input<inputprops>`
  margin-bottom: 10px;
  border-radius: 8px;
  border: none;
  background: #121214;
  color: #fff;
  font-size: 16px;
  outline: none;
  padding-left: 16px;

  ${({ height }) =>
    height === "large"
      ? `
      width: 100%;
      padding:10px;
      height: 40px;
      color: #7c7c8a;
       &::-webkit-inner-spin-button,
       &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
    `
      : height === "medium"
      ? `
      width: 95%;
      padding:20px;
      opacity:0.8;
      color:#fff;
      
    `
      : height === "small"
      ? `
      width: 70%;
      padding:10px;
      height:40px;   
      color:#fff;
    `
      : height === "register"
      ? `
    max-width: 100%;
    padding:10px;
    height:40px;  
    color:#ffff;
    
    &::placeholder{
      color: #7c7c8a;
}
    
  `
      : ""}
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

export const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 28px;
  width: 470px;
`;
