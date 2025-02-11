import { Wrapper, ModalContent, ContainerButton,Containermodal,HeaderCategory,BodyCategory,CategoryList,ContainerCategory } from "./styles";
import { Button } from "../../Button/styles";
import { CgClose } from "react-icons/cg";
import React from "react";
import { InputModal } from "../styles";

interface ModalProps {
  closeTransaction: () => void;

  
}


const categories = [
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

console.log(categories);


  const ModalCategory: React.FC<ModalProps> = ({closeTransaction}) => {

    const[activeButtonIncome, setActiveButtonIncome] = React.useState(true);
      const[activeButtonOutcome, setActiveButtonOutcome] = React.useState(false);
    
      const handleIncome = () =>{
        setActiveButtonIncome(true)
        setActiveButtonOutcome(false)
      }
      const handleOutcome = () =>{
        setActiveButtonIncome(false)
        setActiveButtonOutcome(true)
      }
  return (
    <Wrapper  >
      <ModalContent type = {activeButtonIncome}>
      <HeaderCategory>
          <ContainerButton>
            <Button variant="category"  onClick={handleIncome} isActive={activeButtonIncome}>
              Criar Categoria
            </Button>
            <Button variant="category" onClick={handleOutcome} isActive={activeButtonOutcome}
            >Categorias
            </Button>
          </ContainerButton>
          <Containermodal>
            <CgClose onClick={closeTransaction} />
          </Containermodal>
      </HeaderCategory>
      {activeButtonIncome ? (
        <BodyCategory>
          <InputModal height="small" placeholder="Descrição"></InputModal>
          <Button variant="primary">Adicionar</Button>
        </BodyCategory>
    ) : (

      <CategoryList>
        {categories.map((category) => (
          <ContainerCategory key={category.name}>
            <p>{category.name}</p>
            <CgClose/>
          </ContainerCategory>
        ))}
      </CategoryList>

      
    )}
        
        
      </ModalContent>
    </Wrapper>
  );
};
export default ModalCategory;
