import {
  Wrapper,
  ModalContent,
  ContainerButton,
  Containermodal,
  HeaderCategory,
  BodyCategory,
  CategoryList,
  ContainerCategory,
} from "./styles";
import { Button } from "../../Button/styles";
import { CgClose } from "react-icons/cg";
import React, { ReactElement } from "react";
import { InputModal } from "../styles";
import api from "../../../utils/api";

interface ModalProps {
  closeTransaction: () => void;
}
interface Category {
  name: string;
}

const categories: Category[] = [
  { name: "retiradas" },
  { name: "saídas" },
  { name: "alimentação" },
  { name: "transporte" },
  { name: "moradia" },
  { name: "lazer" },
  { name: "investimentos" },
  { name: "educação" },
  { name: "saúde" },
  { name: "outros" },
  { name: "retiradas" },
  { name: "saídas" },
  { name: "alimentação" },
  { name: "transporte" },
  { name: "moradia" },
  { name: "lazer" },
  { name: "investimentos" },
  { name: "educação" },
  { name: "saúde" },
  { name: "outros" },
];

const ModalCategory: React.FC<ModalProps> = ({ closeTransaction }) => {
  const [activeButtonIncome, setActiveButtonIncome] = React.useState(true);
  const [activeButtonOutcome, setActiveButtonOutcome] = React.useState(false);
  const [category, setCategory] = React.useState<Category>({ name: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newCategory = await api
        .post("/category", category)
        .then((response) => {
          return response.data;
        });
      console.log(newCategory);
    } catch (error) {
      console.log(error);
    }
  };
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
      <ModalContent type={activeButtonIncome}>
        <HeaderCategory>
          <ContainerButton>
            <Button
              $variant="category"
              onClick={handleIncome}
              $isActive={activeButtonIncome}
            >
              Criar Categoria
            </Button>
            <Button
              $variant="category"
              onClick={handleOutcome}
              $isActive={activeButtonOutcome}
            >
              Categorias
            </Button>
          </ContainerButton>
          <Containermodal>
            <CgClose onClick={closeTransaction} />
          </Containermodal>
        </HeaderCategory>
        {activeButtonIncome ? (
          <BodyCategory onSubmit={handleSubmit}>
            <InputModal
              height="small"
              placeholder="Descrição"
              name="name"
              onChange={handleChange}
            />
            <Button $variant="primary">Criar</Button>
          </BodyCategory>
        ) : (
          <CategoryList>
            {categories.map((category) => (
              <ContainerCategory key={category.name}>
                <p>{category.name}</p>
                <CgClose />
              </ContainerCategory>
            ))}
          </CategoryList>
        )}
      </ModalContent>
    </Wrapper>
  );
};
export default ModalCategory;
