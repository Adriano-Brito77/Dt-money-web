import {
  Wrapper,
  ModalContent,
  ContainerButton,
  Containermodal,
  HeaderCategory,
  BodyCategory,
  CategoryList,
  ContainerCategory,
  ContainerP,
} from "./styles";
import { Button } from "../../Button/styles";
import { CgClose } from "react-icons/cg";
import React from "react";
import { InputModal } from "../styles";
import api from "../../../utils/api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ConfirmModal from "../ModalDelete";

interface ModalProps {
  closeTransaction: () => void;
}
export interface Category {
  id?: string;
  name: string;
}

const ModalCategory: React.FC<ModalProps> = ({ closeTransaction }) => {
  const [activeButtonIncome, setActiveButtonIncome] = React.useState(true);
  const [activeButtonOutcome, setActiveButtonOutcome] = React.useState(false);
  const [category, setCategory] = React.useState<Category>({ name: "" });
  const [categoryes, setCategoryes] = React.useState<Category[]>([]);
  const [categoryToDelete, setCategoryToDelete] =
    React.useState<Category | null>(null);

  useEffect(() => {
    api.get("/category").then((response) => {
      setCategoryes(response.data);
    });
  }, [categoryToDelete]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (category.name === "") {
      toast.error("Preencha o campo de descrição");
      return;
    }
    try {
      await api.post("/category", category).then((response) => {
        return response.data;
      });

      setCategory({ name: "" });
      const response = await api.get("/category");
      setCategoryes(response.data);
    } catch (err: any) {
      const erroMessage =
        err.response.data.message || "Erro ao cadastrar Categoria";
      toast.error(erroMessage);
    }
    toast.success("Categoria criada com sucesso!");
  };

  const deleteCategories = async () => {
    try {
      await api.delete(`/category/${categoryToDelete?.id}`);
      setCategoryToDelete(null);
      const response = await api.get("/category");
      setCategoryes(response.data);
    } catch (error: any) {
      const erro =
        error.response.data.message || "Ocorreu um erro durante a exclusão";
      toast.error(erro);
    }

    setCategoryes((prev) => prev.filter((i) => (i.id! += category.id)));
    toast.success("Categoria deletada com sucesso");
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
              value={category.name}
            />
            <Button $variant="primary">Criar</Button>
          </BodyCategory>
        ) : (
          <CategoryList>
            {categoryes.length !== 0 ? (
              categoryes.map((category) => (
                <ContainerCategory key={category.id}>
                  <p>{category.name}</p>
                  <CgClose onClick={() => setCategoryToDelete(category)} />
                </ContainerCategory>
              ))
            ) : (
              <ContainerP>
                <p>Cadastre uma categoria!</p>
              </ContainerP>
            )}
          </CategoryList>
        )}
        <ConfirmModal
          isOpen={!!categoryToDelete}
          onClose={() => setCategoryToDelete(null)}
          onConfirm={deleteCategories}
          message={`Tem certeza que deseja excluir a categoria ${categoryToDelete?.name}?`}
        />
      </ModalContent>
    </Wrapper>
  );
};
export default ModalCategory;
