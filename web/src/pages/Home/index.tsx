import { useState } from "react";
import { Header, Wrapper, Container,ContainerButton } from "./styles";

import Button from "../../components/Button";
import logo from "../../assets/Logo.png";

import CardComponent from "../../components/Card";
import FooterTransaction from "../../components/Transaction";

import UseTransactions from "../../hooks/UseTransaction";
import Modal from "../../components/Modal";

const Home = () => {
    const {
    getTransactionsIncome,
    getTransactionsOutcome,
    getTransactionsResult,
  } = UseTransactions();

  const [openCategory, setOpenCategory] = useState(false);
 

  return (
    <div>
      <Wrapper>
        <Header>

          {openCategory && <Modal />}


          <Container>
            <img src={logo} alt="logo" />
            <ContainerButton>
              <Button variant="primary" onClick={() => setOpenCategory(!openCategory)}>
                Categorias
              </Button>
              <Button variant="primary" onClick={() => console.log()}>
                Nova Transação
              </Button>
            </ContainerButton>
          </Container>

          <Container>
            <CardComponent
              variant="income"
              name="Entradas"
              value={getTransactionsIncome()}
            />
            <CardComponent
              variant="outcome"
              name="Saidas"
              value={getTransactionsOutcome()}
            />
            <CardComponent
              variant="result"
              name="Total"
              value={getTransactionsResult()}
            />
          </Container>
          <FooterTransaction>teste</FooterTransaction>
        </Header>
      </Wrapper>
    </div>
  );
};

export default Home;
