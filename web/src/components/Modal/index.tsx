import React from "react";
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

interface ButtonProps {
  type: "income" | "outcome";
}

const Modal: React.FC<ModalProps> = ({ closeTransaction }) => {
  const [selectedOption, setSelectedOption] = React.useState("");

  return (
    <Wrapper>
      <ModalContent>
        <HeaderModal>
          <span>Nova Transação</span>
          <CgClose onClick={closeTransaction} />
        </HeaderModal>
        <BodyModal>
          <InputModal placeholder="Descrição" />
          <InputModal placeholder="Preço" />

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
          <ButtonModal type="income">
            <img src={income} alt="income" />
            <span>Entrada</span>
          </ButtonModal>
          <ButtonModal type="outcome">
            <img src={outcome} alt="outcome" />
            <span>Saída</span>
          </ButtonModal>
        </ContainerButton>
        <SaveButton>
          <Button variant="primary">Salvar</Button>
        </SaveButton>
      </ModalContent>
    </Wrapper>
  );
};

export default Modal;
