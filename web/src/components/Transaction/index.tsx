import React from "react";
import { Footer, Search, Transaction, Wrapper, WrapperPage } from "./styles";
import { Button } from "../Button/styles";

interface Transaction {
  id: string;
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
  user: string;
}

const transactions: Transaction[] = [
  {
    id: "1",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "2",
    description: "Groceries",
    price: 150,
    category: "venda",
    type: "outcome",
    user: "User1",
  },
  {
    id: "3",
    description: "Salary",
    price: 5000,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "4",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "5",
    description: "Groceries",
    price: 150,
    category: "venda",
    type: "outcome",
    user: "User1",
  },
  {
    id: "6",
    description: "Salary",
    price: 5000,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "7",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "8",
    description: "Groceries",
    price: 150,
    category: "venda",
    type: "outcome",
    user: "User1",
  },
  {
    id: "9",
    description: "Salary",
    price: 5000,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "10",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "11",
    description: "Groceries",
    price: 150,
    category: "venda",
    type: "outcome",
    user: "User1",
  },
  {
    id: "12",
    description: "Salary",
    price: 5000,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "13",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "14",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "15",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "16",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "17",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "1",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "2",
    description: "Groceries",
    price: 150,
    category: "venda",
    type: "outcome",
    user: "User1",
  },
  {
    id: "3",
    description: "Salary",
    price: 5000,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "4",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "5",
    description: "Groceries",
    price: 150,
    category: "venda",
    type: "outcome",
    user: "User1",
  },
  {
    id: "6",
    description: "Salary",
    price: 5000,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "7",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "8",
    description: "Groceries",
    price: 150,
    category: "venda",
    type: "outcome",
    user: "User1",
  },
  {
    id: "9",
    description: "Salary",
    price: 5000,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "10",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "11",
    description: "Groceries",
    price: 150,
    category: "venda",
    type: "outcome",
    user: "User1",
  },
  {
    id: "12",
    description: "Salary",
    price: 5000,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "13",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "14",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "15",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "16",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "17",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "1",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "2",
    description: "Groceries",
    price: 150,
    category: "venda",
    type: "outcome",
    user: "User1",
  },
  {
    id: "3",
    description: "Salary",
    price: 5000,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "4",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "5",
    description: "Groceries",
    price: 150,
    category: "venda",
    type: "outcome",
    user: "User1",
  },
  {
    id: "6",
    description: "Salary",
    price: 5000,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "7",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "8",
    description: "Groceries",
    price: 150,
    category: "venda",
    type: "outcome",
    user: "User1",
  },
  {
    id: "9",
    description: "Salary",
    price: 5000,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "10",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "11",
    description: "Groceries",
    price: 150,
    category: "venda",
    type: "outcome",
    user: "User1",
  },
  {
    id: "12",
    description: "Salary",
    price: 5000,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "13",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "14",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "15",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "16",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
  {
    id: "17",
    description: "Salary",
    price: 4000.45,
    category: "venda",
    type: "income",
    user: "User1",
  },
];

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const FooterTransaction: React.FC<FooterProps> = ({ children, ...props }) => {
  const [search, setSearch] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const searchProperties = ["description", "category", "price", "date"];

  const filterTransactions = (transactions: Transaction[]) => {
    return transactions.filter((transaction) =>
      searchProperties.some((property) => {
        const value = transaction[property as keyof Transaction];
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

  const goFirtsPage = () => {
    setCurrentPage(
      filterTransactions(transactions).length /
        filterTransactions(transactions).length
    );
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
        {currentData &&
          currentData().map((transaction: Transaction) => (
            <span key={transaction.id}>
              <p>{transaction.description}</p>
              <p>R$ {transaction.price}</p>
              <p>{transaction.category}</p>
              <p>{transaction.user}</p>
            </span>
          ))}
      </Transaction>

      <WrapperPage>
        <Button
          variant="pages"
          onClick={() => goFirtsPage()}
          disabled={currentPage === 1}
        >
          Primeira pagina
        </Button>
        <Button
          variant="pages"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </Button>

        <span>
          {currentPage} de {totalPages}
        </span>
        <Button
          variant="pages"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próxima
        </Button>
        <Button
          variant="pages"
          onClick={() => goLastPage()}
          disabled={currentPage === totalPages}
        >
          Última página
        </Button>
      </WrapperPage>
    </Footer>
  );
};

export default FooterTransaction;
