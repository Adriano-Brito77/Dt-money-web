import styled from "styled-components";

export const Card = styled.div`
  padding: 10px;
  background-color: #323238;
  color: #b8bec4;
  width: 352px;
  height: 137px;
  border-radius: 5px;
`;

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

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 80%;
`;
