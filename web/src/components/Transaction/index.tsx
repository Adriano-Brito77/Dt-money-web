import React, { useContext, useEffect, useMemo } from "react";
import {
  Footer,
  Search,
  Transaction,
  Wrapper,
  WrapperPage,
  PStyles,
} from "./styles";
import api from "../../utils/api";

import { Button } from "../Button/styles";
import { Context } from "../../context/UseContext";

interface TransactionData {
  id: string;
  description: string;
  price: number;
  category: string;
  type?: "income" | "outcome";
  createdAt: string;
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const FooterTransaction: React.FC<FooterProps> = ({ children, ...props }) => {
  const [search, setSearch] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [transactions, setTransactions] = React.useState<TransactionData[]>([]);
  const [teste, setteste] = React.useState<string>("");

  const context = useContext(Context);

  if (!context) {
    throw new Error(
      "Contexto não encontrado. Verifique se o Provider está correto."
    );
  }

  const { searchState } = context;

  useEffect(() => {
    api.get("/transaction").then((response) => {
      setTransactions(response.data);
    });
  }, [searchState]);

  const searchProperties: (keyof TransactionData)[] = [
    "description",
    "category",
    "price",
    "createdAt",
  ];
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filterTransactions = (transactions: TransactionData[]) => {
    return transactions.filter((transaction) =>
      searchProperties.some((property) => {
        const value = transaction[property as keyof TransactionData];
        return (
          (typeof value === "string" &&
            value.toLowerCase().includes(search.toLowerCase())) ||
          (typeof value === "number" && value.toString().includes(search))
        );
      })
    );
  };

  const totalPages = Math.ceil(filterTransactions(transactions).length / 10);

  const currentData = () => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    return filterTransactions(transactions).slice(startIndex, endIndex);
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const goFirstPage = () => {
    setCurrentPage(1);
  };

  const goLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <Footer {...props}>
      <Wrapper>
        <Search
          placeholder="Busque uma transação"
          onChange={(e: any) => setSearch(e.target.value)}
          value={search}
        />
      </Wrapper>

      <Transaction>
        {currentData().map((transaction: TransactionData) => (
          <span key={transaction.id}>
            <p>{transaction.description}</p>
            <PStyles type={transaction.type || "income"}>
              {transaction.type === "outcome" ? "-" : ""} R$ {transaction.price}
            </PStyles>
            <p>{transaction.category}</p>
            <p>{transaction.createdAt}</p>
          </span>
        ))}
      </Transaction>

      {totalPages > 1 && (
        <WrapperPage>
          <Button
            $variant="pages"
            onClick={goFirstPage}
            disabled={currentPage === 1}
          >
            Primeira página
          </Button>
          <Button
            $variant="pages"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>

          <span>
            {currentPage} de {totalPages}
          </span>
          <Button
            $variant="pages"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Próxima
          </Button>
          <Button
            $variant="pages"
            onClick={goLastPage}
            disabled={currentPage === totalPages}
          >
            Última página
          </Button>
        </WrapperPage>
      )}
    </Footer>
  );
};

export default FooterTransaction;
