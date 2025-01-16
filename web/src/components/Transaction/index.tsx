import React from "react";
import { Footer, Search, Transaction, Wrapper } from "./styles";
import { Button } from "../Button/styles";
import { VscSearch } from "react-icons/vsc";

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
];

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const FooterTransaction: React.FC<FooterProps> = ({ children, ...props }) => {
  const [search, setSearch] = React.useState<string>("");

  const searchProperties = ["description", "category", "price", "date"];

  const filtro = transactions.filter((transaction) =>
    searchProperties.some((property) => {
      const value = transaction[property as keyof Transaction];
      return (
        (typeof value === "string" &&
          value.toLowerCase().includes(search.toLowerCase())) ||
        (typeof value === "number" && value.toString().includes(search))
      );
    })
  );

  return (
    <Footer {...props}>
      <Wrapper>
        <Search
          placeholder="Busque uma transação"
          onChange={(e: any) => setSearch(e.target.value)}
          value={search}
        />
        <Button variant="search">
          <VscSearch />
          Buscar
        </Button>
      </Wrapper>

      <Transaction>
        {filtro &&
          filtro.map((transaction) => (
            <span key={transaction.id}>
              <p>{transaction.description}</p>
              <p>R$ {transaction.price}</p>
              <p>{transaction.category}</p>
              <p>{transaction.user}</p>
            </span>
          ))}
      </Transaction>
    </Footer>
  );
};

export default FooterTransaction;
