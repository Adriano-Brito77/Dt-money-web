import React, { useContext, useState } from "react";
import { Wrapper, Container, LabelReg, ContainerInput } from "./styles";
import { InputModal } from "../../components/Modal/styles";
import { Button } from "../../components/Button/styles";
import { LinkAuth } from "../Login/styles";
import Context from "../../context/UseContext";
import { ContainerLink } from "../Login/styles";

export interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const context = useContext(Context);

  if (!context) {
    throw new Error(
      "Contexto não encontrado. Verifique se o Provider está correto."
    );
  }

  const { register } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(user);
  };

  console.log(user);

  return (
    <Wrapper>
      <Container onSubmit={handleSubmit}>
        <h1>Registre-se</h1>
        <ContainerInput>
          <LabelReg htmlFor="name">Nome:</LabelReg>
          <InputModal
            id="name"
            type="name"
            onChange={handleChange}
            placeholder="Digite seu nome"
            height="register"
          />

          <LabelReg htmlFor="email">E-mail:</LabelReg>
          <InputModal
            id="email"
            type="email"
            onChange={handleChange}
            placeholder="Digite seu email"
            height="register"
          />

          <LabelReg htmlFor="pass">Senha:</LabelReg>
          <InputModal
            id="password"
            type="password"
            onChange={handleChange}
            placeholder="Digite seu senha"
            height="register"
          />

          <LabelReg htmlFor="confirmpass">Confirme sua senha:</LabelReg>
          <InputModal
            id="confirmPassword"
            type="password"
            onChange={handleChange}
            placeholder="Digite seu senha"
            height="register"
          />
          <ContainerLink>
            <p>Se ja possui conta</p>
            <LinkAuth href="auth">Clique aqui</LinkAuth>
          </ContainerLink>
        </ContainerInput>
        <Button $variant="primary" type="submit">
          Cadastrar-se
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Register;
