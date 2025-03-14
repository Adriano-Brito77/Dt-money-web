import { useState, useEffect, useContext } from "react";
import { Header, Wrapper, Container, ContainerButton } from "./styles";

import Button from "../../components/Button";
import logo from "../../assets/Logo.png";

import CardComponent from "../../components/Card";
import FooterTransaction from "../../components/Transaction";

import UseTransactions from "../../hooks/UseTransaction";
import Modal from "../../components/Modal";
import ModalCategory from "../../components/Modal/Category";
import ConfirmModal from "../../components/Modal/ModalDelete";
import { CgLogIn } from "react-icons/cg";

import Context from "../../context/UseContext";


const Home = () => {
  const {
    income,
    outcome,
    result,
    getTransactions
  } = UseTransactions();

  const context = useContext(Context);
    
      if (!context) {
        throw new Error(
          "Contexto não encontrado. Verifique se o Provider está correto."
        );
      }
    
      const { logout} = context

  const [openTransaction, setOpenCloseTransaction] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openAlertLogout, setOpenAlertLogout ] = useState(false)

  const closeModal = () => {
    setOpenAlertLogout(false)
    setOpenCloseTransaction(false);
  };

  // Carrega as transações ao montar o componente
  useEffect(() => {
    getTransactions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  // Esse array vazio significa que o efeito será executado apenas uma vez, quando o componente montar.

  return (
    <div>
      <Wrapper>
        <Header>
          {openTransaction && <Modal closeTransaction={() => closeModal()} trasition={() => getTransactions()} />}
          {openCategory && (<ModalCategory closeTransaction={() => setOpenCategory(false)} />)}
          {openAlertLogout && (<ConfirmModal isOpen={openAlertLogout} onClose={closeModal} onConfirm={logout} message="Você realmente deseja sair ?"/>)}

          <Container>
            <img src={logo} alt="logo" />
            <ContainerButton>
              <Button
                variant="primary"
                onClick={() => setOpenCategory(!openCategory)}
              >
                Categorias
              </Button>

              <Button
                variant="primary"
                onClick={() => setOpenCloseTransaction(!openTransaction)}
              >
                Nova Transação
              </Button>
              <Button 
              variant="logout"
              onClick={() => setOpenAlertLogout(!openAlertLogout)}>
                Sair
                <CgLogIn />
              </Button>
            </ContainerButton>
          </Container>

          <Container>
            <CardComponent
              variant="income"
              name="Entradas"
              value={income}
            />
            <CardComponent
              variant="outcome"
              name="Saídas"
              value={outcome}
            />
            <CardComponent
              variant="result"
              name="Total"
              value={result}
            />
          </Container>
          <FooterTransaction>teste</FooterTransaction>
        </Header>
      </Wrapper>
    </div>
  );
};

export default Home;
