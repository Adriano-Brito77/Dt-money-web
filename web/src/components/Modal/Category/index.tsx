import { Wrapper, ModalContent, ContainerButton,Containermodal } from "./styles";
import { Button } from "../../Button/styles";
import { CgClose } from "react-icons/cg";

interface ModalProps {
  closeTransaction: () => void;
}

  const ModalCategory: React.FC<ModalProps> = ({closeTransaction}) => {
  return (
    <Wrapper>
      <ModalContent >
        <ContainerButton>
            <Button variant="category" position="left">
              Criar Categoria
            </Button>
            <Button variant="category">Categorias</Button>

          
        </ContainerButton>
        <Containermodal>

            <CgClose onClick={closeTransaction} />
            
        </Containermodal>

        
        
      </ModalContent>
    </Wrapper>
  );
};
export default ModalCategory;
