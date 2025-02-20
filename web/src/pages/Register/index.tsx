import React from "react";
import { Wrapper, Container, LabelReg, ContainerInput } from "./styles";
import { InputModal } from "../../components/Modal/styles";
import { Button } from "../../components/Button/styles";
import { LinkAuth } from "../Login/styles";

const Register = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Registre-se</h1>
        <ContainerInput>
          <LabelReg htmlFor="name">Nome:</LabelReg>
          <InputModal
            id="name"
            type="name"
            placeholder="Digite seu nome"
            height="register"
          />

          <LabelReg htmlFor="email">E-mail:</LabelReg>
          <InputModal
            id="email"
            type="email"
            placeholder="Digite seu email"
            height="register"
          />

          <LabelReg htmlFor="pass">Senha:</LabelReg>
          <InputModal
            id="pass"
            type="password"
            placeholder="Digite seu senha"
            height="register"
          />

          <LabelReg htmlFor="confirmpass">Confirme sua senha:</LabelReg>
          <InputModal
            id="Confirmpass"
            type="password"
            placeholder="Digite seu senha"
            height="register"
          />
          <LinkAuth href="auth">teste</LinkAuth>
        </ContainerInput>
        <Button variant="primary">Cadastrar-se</Button>
      </Container>
    </Wrapper>
  );
};

export default Register;
