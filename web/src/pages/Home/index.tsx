import { Header, Wrapper, Container,WrapperCard, HeaderCard} from "./styles";
import Button from "../../components/Button";
import logo from "../../assets/Logo.png";
import income from "../../assets/income.png";
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
          
          <CardComponent variant="income" name="Entradas" value={5000}/>
          
          
          
        </Header>
      </Wrapper>
    </div>
  );
};

export default Home;
