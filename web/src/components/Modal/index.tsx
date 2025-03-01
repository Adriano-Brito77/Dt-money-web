import React, { useEffect } from "react";
import {
  Wrapper,
  ModalContent,
  HeaderModal,
  InputModal,
  BodyModal,
  SelectModal,
  StyledOption,
  ButtonModal,
  ContainerButton,
  SaveButton,
} from "./styles";
import { Button } from "../Button/styles";

import income from "../../assets/income.png";
import outcome from "../../assets/outcome.png";

import { CgClose } from "react-icons/cg";
import api from "../../utils/api";

const OptionsModal = [
  {
    id: "b8db33bd-f396-4b88-bca1-b10efd3d29cf",
    name: "Comidas",
    user: "188bb9cd-1ba2-4b57-8b01-5d0a1ea59ea5",
    createdAt: "2024-12-16T22:25:43.476Z",
  },
  {
    id: "3eaf2311-8123-41e6-a3ff-dfe261e15621",
    name: "teste",
    user: "188bb9cd-1ba2-4b57-8b01-5d0a1ea59ea5",
    createdAt: "2024-12-18T19:01:18.231Z",
  },
];
interface ModalProps {
  closeTransaction: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeTransaction }) => {
  const [, setSelectedOption] = React.useState("");
  const [activeButtonIncome, setActiveButtonIncome] = React.useState(false);
  const [activeButtonOutcome, setActiveButtonOutcome] = React.useState(false);

  const handleIncome = () => {
    setActiveButtonIncome(true);
    setActiveButtonOutcome(false);
  };
  const handleOutcome = () => {
    setActiveButtonIncome(false);
    setActiveButtonOutcome(true);
  };

  return (
    <Wrapper>
      <ModalContent>
        <HeaderModal>
          <span>Nova Transação</span>
          <CgClose onClick={closeTransaction} />
        </HeaderModal>
        <BodyModal>
          <InputModal height="large" placeholder="Descrição" />
          <InputModal height="large" type="number" placeholder="Preço" />

          <SelectModal onChange={(e: any) => setSelectedOption(e.target.value)}>
            <StyledOption value="">Categorias</StyledOption>
            {OptionsModal.map((option) => (
              <StyledOption key={option.id} value={option.id}>
                {option.name}
              </StyledOption>
            ))}
          </SelectModal>
        </BodyModal>
        <ContainerButton>
          <ButtonModal
            type="income"
            isActive={activeButtonIncome}
            onClick={handleIncome}
          >
            <img src={income} alt="income" />
            <span>Entrada</span>
          </ButtonModal>
          <ButtonModal
            type="outcome"
            isActive={activeButtonOutcome}
            onClick={handleOutcome}
          >
            <img src={outcome} alt="outcome" />
            <span>Saída</span>
          </ButtonModal>
        </ContainerButton>
        <SaveButton>
          <Button $variant="primary">Salvar</Button>
        </SaveButton>
      </ModalContent>
    </Wrapper>
  );
};

export default Modal;
