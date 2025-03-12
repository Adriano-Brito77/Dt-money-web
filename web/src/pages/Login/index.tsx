import React, { useState, useContext } from "react";
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
import Context from "../../context/UseContext";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  posistion?: "left" | "right";
}

export interface UserLogin {
  email: string;
  password: string;
}

const Auth: React.FC<ContainerProps> = () => {
  const [user, setUser] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const context = useContext(Context);

  if (!context) {
    throw new Error(
      "Contexto não encontrado. Verifique se o Provider está correto."
    );
  }

  const { login } = context;




  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const handleSbmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(user);
    
  };

  return (
    <Wrapper>
      <Container posistion="left">
        <img src={LogoAuth} alt="LogoAuth" />
      </Container>
      <Container posistion="right" onSubmit={handleSbmit}>
        <h1>Acesse sua conta</h1>

        <ContainerInput>
          <label htmlFor="email">E-mail:</label>
          <InputModal
            id="email"
            type="email"
            height="medium"
            placeholder="Digite seu E-mail"
            onChange={handleChange}
          />
          <label htmlFor="pass">Senha:</label>
          <InputModal
            id="password"
            type="password"
            height="medium"
            placeholder="Digite sua senha"
            onChange={handleChange}
          />

          <ContainerLink>
            <LinkAuth>Esqueceu a senha ?</LinkAuth>
            <LinkAuth href="register" >Crie sua conta</LinkAuth>
          </ContainerLink>

          <ContainerButton>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </ContainerButton>
        </ContainerInput>
      </Container>
    </Wrapper>
  );
};

export default Auth;
