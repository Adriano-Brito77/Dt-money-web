import React from "react";
import { Footer, Search, Transaction, Wrapper, WrapperPage,PStyles } from "./styles";
import { Button } from "../Button/styles";

interface TransactionData {
  id: string;
  description: string;
  price: number;
  category: string;
  type?: "income" | "outcome";
  user: string;
}


const transactions:TransactionData[]= [
  { id: "1", description: "Groceries", price: 150.79, category: "venda", type: "outcome", user: "User1" },
  { id: "2", description: "Salary", price: 3000, category: "salario", type: "income", user: "User2" },
  { id: "3", description: "Utility Bills", price: 200, category: "despesa", type: "outcome", user: "User3" },
  { id: "4", description: "Freelance Project", price: 500, category: "trabalho", type: "income", user: "User4" },
  { id: "5", description: "Car Maintenance", price: 400, category: "transporte", type: "outcome", user: "User1" },
  { id: "6", description: "Gym Membership", price: 50, category: "saude", type: "outcome", user: "User5" },
  { id: "7", description: "Dividends", price: 100, category: "investimento", type: "income", user: "User2" },
  { id: "8", description: "Birthday Party", price: 250, category: "eventos", type: "outcome", user: "User6" },
  { id: "9", description: "Rent", price: 800, category: "moradia", type: "outcome", user: "User3" },
  { id: "10", description: "Online Course", price: 300, category: "educacao", type: "outcome", user: "User7" },
  { id: "11", description: "Freelance Gig", price: 700, category: "trabalho", type: "income", user: "User8" },
  { id: "12", description: "Vacation", price: 1200, category: "lazer", type: "outcome", user: "User1" },
  { id: "13", description: "Bonus", price: 1500, category: "bonus", type: "income", user: "User4" },
  { id: "14", description: "Books", price: 120, category: "educacao", type: "outcome", user: "User6" },
  { id: "15", description: "Dining Out", price: 100, category: "alimentacao", type: "outcome", user: "User3" },
  { id: "16", description: "Stocks Sale", price: 1000, category: "investimento", type: "income", user: "User2" },
  { id: "17", description: "Concert Tickets", price: 150, category: "lazer", type: "outcome", user: "User5" },
  { id: "18", description: "Insurance Payout", price: 600, category: "seguro", type: "income", user: "User7" },
  { id: "19", description: "Childcare", price: 500, category: "familia", type: "outcome", user: "User8" },
  { id: "20", description: "Pet Expenses", price: 200, category: "animais", type: "outcome", user: "User4" },
  { id: "21", description: "Interest Earned", price: 300, category: "banco", type: "income", user: "User1" },
  { id: "22", description: "Home Renovation", price: 5000, category: "moradia", type: "outcome", user: "User6" },
  { id: "23", description: "Side Hustle", price: 800, category: "trabalho", type: "income", user: "User3" },
  { id: "24", description: "Charity Donation", price: 400, category: "caridade", type: "outcome", user: "User7" },
  { id: "25", description: "Electronics", price: 1200, category: "tecnologia", type: "outcome", user: "User8" },
  { id: "26", description: "Refund", price: 150, category: "outros", type: "income", user: "User2" },
  { id: "27", description: "Clothing", price: 250, category: "vestuario", type: "outcome", user: "User5" },
  { id: "28", description: "Consulting Fee", price: 1000, category: "trabalho", type: "income", user: "User4" },
  { id: "29", description: "Gadgets", price: 800, category: "tecnologia", type: "outcome", user: "User1" },
  { id: "30", description: "Groceries", price: 200, category: "venda", type: "outcome", user: "User6" }
];

  

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const FooterTransaction: React.FC<FooterProps> = ({ children, ...props }) => {
  const [search, setSearch] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const searchProperties: (keyof TransactionData)[] = ['description', 'category', "price",'user']

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

      <Transaction >
        {currentData &&
          currentData().map((transaction: TransactionData) => (
            <span key={transaction.id}>
              <p >{transaction.description}</p>
              <PStyles type={transaction.type || "income"}>
              {transaction.type === "outcome" ? "-" : ''} R$ {transaction.price}</PStyles>
              <p>{transaction.category}</p>
              <p>{transaction.user}</p>
              
            </span>
          ))}
      </Transaction>

      {totalPages > 1 && 
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
      </WrapperPage>}
    </Footer>
  );
};

export default FooterTransaction;
