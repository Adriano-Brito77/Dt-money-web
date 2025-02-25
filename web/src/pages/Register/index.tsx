import React, { useContext, useState } from "react";
import { Wrapper, Container, LabelReg, ContainerInput } from "./styles";
import { InputModal } from "../../components/Modal/styles";
import { Button } from "../../components/Button/styles";
import { LinkAuth } from "../Login/styles";
import Context from "../../context/UseContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [user, setUser] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Container>
        <h1>Registre-se</h1>
        <ContainerInput onSubmit={handleSubmit}>
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
            id="pass"
            type="password"
            onChange={handleChange}
            placeholder="Digite seu senha"
            height="register"
          />

          <LabelReg htmlFor="confirmpass">Confirme sua senha:</LabelReg>
          <InputModal
            id="Confirmpass"
            type="password"
            onChange={handleChange}
            placeholder="Digite seu senha"
            height="register"
          />
          <LinkAuth href="auth">teste</LinkAuth>
          <Button variant="primary" type="submit">
            Cadastrar-se
          </Button>
        </ContainerInput>
      </Container>
      <ToastContainer />
    </Wrapper>
  );
};

export default Register;
