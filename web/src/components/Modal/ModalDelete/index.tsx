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

import React, { useContext } from "react";

import Context from "../../../context/UseContext";



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



    

  const context = useContext(Context);

  if (!context) {
    throw new Error(
      "Contexto não encontrado. Verifique se o Provider está correto."
    );
  }

  

 
  if(!isOpen)return null;




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
          <Button $variant="confirm" onClick={() => {onConfirm()}}>
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
