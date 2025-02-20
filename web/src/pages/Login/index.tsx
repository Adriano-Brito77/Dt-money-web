import React from "react";
import {
  Wrapper,
  Container,
  ContainerInput,
  ContainerLink,
  LinkAuth,
  ContainerButton,
} from "./styles";
import LogoAuth from "../../assets/interface.png";
import { InputModal } from "../../components/Modal/styles";
import Button from "../../components/Button";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  posistion?: "left" | "right";
}

const Auth: React.FC<ContainerProps> = () => {
  return (
    <Wrapper>
      <Container posistion="left">
        <img src={LogoAuth} alt="LogoAuth" />
      </Container>
      <Container posistion="right">
        <h1>Acesse sua conta</h1>

        <ContainerInput>
          <label htmlFor="email">E-mail:</label>
          <InputModal
            id="email"
            type="email"
            height="medium"
            placeholder="Digite seu E-mail"
          />
          <label htmlFor="pass">Senha:</label>
          <InputModal
            id="pass"
            type="password"
            height="medium"
            placeholder="Digite sua senha"
          />

          <ContainerLink>
            <LinkAuth>Esqueceu a senha ?</LinkAuth>
            <LinkAuth href="register">Crie sua conta</LinkAuth>
          </ContainerLink>

          <ContainerButton>
            <Button variant="primary">Entrar</Button>
          </ContainerButton>
        </ContainerInput>
      </Container>
    </Wrapper>
  );
};

export default Auth;
