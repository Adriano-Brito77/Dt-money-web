import { Header, Wrapper, Container, Card, ContainerCard } from "./styles";
import Button from "../../components/Button";
import logo from "../../assets/Logo.png";

const Home = () => {
  return (
    <div>
      <Wrapper>
        <Header>
          <Container>
            <img src={logo} alt="logo" />
            <Button>Nova Transação</Button>
          </Container>
          <ContainerCard>
            <Card>entradas</Card>
            <Card>entradas</Card>
            <Card>entradas</Card>
          </ContainerCard>
        </Header>
      </Wrapper>
    </div>
  );
};

export default Home;
