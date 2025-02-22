import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #121214;
`;

export const Container = styled.form`
  height: 70%;
  width: 30%;
  background-color: rgb(36, 36, 39);
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerInput = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 80%;
`;

export const LabelReg = styled.label`
  color: #fff;
  display: flex;
  padding: 0px 0px 8px 8px;
  width: 80%;
`;
