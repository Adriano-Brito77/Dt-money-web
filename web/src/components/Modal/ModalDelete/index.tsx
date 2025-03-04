import {
  Wrapper,
  ModalContent,
  Containermodal,
  HeaderCategory,
  ContainerButtonConfirm,
  ContainerSvg,
  ContainerTitle,
} from "./styles";
import { Button } from "../../Button/styles";
import { CgClose } from "react-icons/cg";

interface confirmModal {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

const ConfirmModal: React.FC<confirmModal> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
}) => {
  if (!isOpen) return null;
  return (
    <Wrapper>
      <ModalContent>
        <Containermodal>
          <ContainerTitle>
            <HeaderCategory>{message}</HeaderCategory>{" "}
          </ContainerTitle>

          <ContainerSvg>
            <CgClose onClick={onClose} />
          </ContainerSvg>
        </Containermodal>
        <ContainerButtonConfirm>
          <Button $variant="confirm" onClick={onConfirm}>
            Confirmar
          </Button>
          <Button $variant="delete" onClick={onClose}>
            Cancelar
          </Button>
        </ContainerButtonConfirm>
      </ModalContent>
    </Wrapper>
  );
};

export default ConfirmModal;
