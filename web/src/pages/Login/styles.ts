import styled from "styled-components";

interface ContainerProps {
  posistion?: "left" | "right";
}

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.form<ContainerProps>`
  height: 55%;
  width: 34%;
  display: flex;
  font-size: 1.5rem;
  font-weight: 500;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  color: #ffff;
  background-color: #323238;
  border-radius: 0px 10px 10px 0px;
  gap: 40px;

  ${(props) =>
    props.posistion === "left"
      ? `
        display: flex;
        justify-content: center;
        align-items: center;   
        border:none;
        background-color: #00b37e;
        border-radius: 10px 0px 0px 10px;
        img{
            width: 80%;
            height: 100%;
    }
    `
      : ""}

  h1 {
    font-size: 32px;
  }

  label {
    font-size: 20px;
    font-weight: 0;
    padding-left: 4px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  align-items: start;
  flex-direction: column;
  gap: 8px;
`;
export const ContainerLink = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10%;
  width: 101%;
  padding-left: 4px;
`;

export const LinkAuth = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  height: 20%;
  width: 101%;
  justify-content: center;
  padding-top: 24px;
`;
