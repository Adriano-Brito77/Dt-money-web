import { Wrapper, ModalContent, ContainerButton } from "./styles";
import { Button } from "../../Button/styles";

interface ModalProps {
  closeTransaction: () => void;
}

const ModalCategory: React.FC<ModalProps> = (closeTransaction) => {
  return (
    <Wrapper>
      <ModalContent>
        <ContainerButton>
          <Button variant="category" position="left">
            Criar Categoria
          </Button>
          <Button variant="category">Categorias</Button>
        </ContainerButton>
      </ModalContent>
    </Wrapper>
  );
};
export default ModalCategory;
