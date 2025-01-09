import { Header, Wrapper, Container} from "./styles";
import Button from "../../components/Button";
import logo from "../../assets/Logo.png";

import CardComponent from "../../components/Card";

const Home = () => {
  return (
    <div>
      <Wrapper>
        <Header>

          <Container>
              <img src={logo} alt="logo" />
              <Button variant="primary">Nova Transação</Button>
          </Container>

          <Container>
          <CardComponent variant="income" name="Entradas" value={5000}/>
          <CardComponent variant="outcome" name="Saidas" value={5000}/>
          <CardComponent variant="result" name="Total" value={0}/>
          </Container>
          
          
        </Header>
      </Wrapper>
    </div>
  );
};

export default Home;
