import { Header, Wrapper, Container } from "./styles";

import Button from "../../components/Button";
import logo from "../../assets/Logo.png";

import CardComponent from "../../components/Card";
import FooterTransaction from "../../components/Transaction";

import UseTransactions from "../../hooks/UseTransaction";

const Home = () => {
  const { getTransactionsIncome } = UseTransactions();
  return (
    <div>
      <Wrapper>
        <Header>
          <Container>
            <img src={logo} alt="logo" />
            <Button variant="primary" onClick={() => console.log()}>
              Nova Transação
            </Button>
          </Container>

          <Container>
            <CardComponent variant="income" name="Entradas" value={getTransactionsIncome()} />
            <CardComponent variant="outcome" name="Saidas" value={5000} />
            <CardComponent variant="result" name="Total" value={0} />
          </Container>
          <FooterTransaction>teste</FooterTransaction>
        </Header>
      </Wrapper>
    </div>
  );
};

export default Home;
