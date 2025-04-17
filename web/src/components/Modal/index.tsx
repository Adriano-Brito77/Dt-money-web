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
import { Category } from "../Modal/Category";
import { CgClose } from "react-icons/cg";
import api from "../../utils/api";
import { toast } from "react-toastify";



interface ModalProps {
  closeTransaction: () => void;
  trasition:()=> void
}

export const Modal: React.FC<ModalProps> = ({ closeTransaction, trasition}) => {
  const [, setSelectedOption] = React.useState("");
  const [activeButton, setActiveButton] = React.useState(true);
  const [OptionsModal, setOptionsModal] = React.useState<Category[]>([]);
  const [transaction, setTransaction] = React.useState({
    description: "",
    price: "",
    category: "",
    type: "income",
  });

  
 useEffect(() => {
    api.get("/category").then((response) => {
      setOptionsModal(response.data);
    });
  }, [transaction]);

  const handleIncome = (e: any) => {
    e.preventDefault();
    setActiveButton(true);
    setTransaction((prev) => ({ ...prev, type: "income" }));
  };
  const handleOutcome = (e: any) => {
    e.preventDefault();
    setActiveButton(false);
    setTransaction((prev) => ({ ...prev, type: "outcome" }));
  };
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setTransaction((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value, // Converte price para número
    }));
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setTransaction((prev) => ({
      ...prev,
      category: selectedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    
    if (transaction.description === "") {
      toast.error("Preencha o campo de descrição");
      return;
    }
    if (transaction.price === "") {
      toast.error("Preencha o campo de preço");
      return;
    }
    if (transaction.category === "") {
      toast.error("Selecione uma categoria");
      return;
    }

    try {
      await api.post("/transaction", transaction);
      toast.success("Transação criada com sucesso!");
      
    } catch (err:any) {

      const errorMessage = err.response.data.message ||
        "Erro ao realizar cadastro. Tente novamente.";
      toast.error(errorMessage);

      return
    }

    
    setTransaction({
      description: "",
      price: "",
      category: transaction.category,
      type: "income",
    });
   
    
    trasition()

    console.log(trasition)
    

  };

  return (
    <Wrapper>
      <ModalContent onSubmit={handleSubmit}>
        <HeaderModal>
          <span>Nova Transação</span>
          <CgClose onClick={closeTransaction} />
        </HeaderModal>
        <BodyModal>
          <InputModal
            height="large"
            name="description"
            placeholder="Descrição"
            onChange={handleChange}
            value={transaction.description}
          />
          <InputModal
            height="large"
            name="price"
            type="number"
            placeholder="Preço"
            onChange={handleChange}
            value={transaction.price}
          />

          <SelectModal onChange={handleSelectChange}>
            <StyledOption value="1">Categorias</StyledOption>
            {OptionsModal
              ? OptionsModal.map((option) => (
                  <StyledOption key={option.id} value={option.id}>
                    {option.name}
                  </StyledOption>
                ))
              : ""}
          </SelectModal>
        </BodyModal>
        <ContainerButton>
          <ButtonModal
            type="income"
            isActive={activeButton}
            onClick={handleIncome}
          >
            <img src={income} alt="income" />
            <span>Entrada</span>
          </ButtonModal>
          <ButtonModal
            type="outcome"
            isActive={!activeButton}
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
