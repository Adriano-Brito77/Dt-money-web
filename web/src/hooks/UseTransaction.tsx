import React from "react";
import api from "../utils/api";

interface Transaction {
  id: string;
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
  user: string;
}

export const UseTransactions = () => {
  const [transactionsCenter, setTransactions] = React.useState<Transaction[]>(
    []
  );

  React.useEffect(() => {
    api.get("/transaction").then((response) => {
      setTransactions(response.data);
    });
  }, []);

  const getTransactionsIncome = () => {
    const trasacao = transactionsCenter
      .filter((transaction) => transaction.type === "income")
      .reduce((acc, transaction) => acc + transaction.price, 0);
    return trasacao;
  };

  const getTransactionsOutcome = () => {
    const trasacao = transactionsCenter
      .filter((transaction) => transaction.type === "outcome")
      .reduce((acc, transaction) => acc + transaction.price, 0);
    return trasacao;
  };

  const getTransactionsResult = () => {
    const income = transactionsCenter
      .filter((transaction) => transaction.type === "income")
      .reduce((acc, transaction) => acc + transaction.price, 0);

    const outcome = transactionsCenter
      .filter((transaction) => transaction.type === "outcome")
      .reduce((acc, transaction) => acc + transaction.price, 0);

    const result = income - outcome;
    return parseFloat(result.toFixed(2));
  };

  return {
    getTransactionsIncome,
    getTransactionsOutcome,
    getTransactionsResult,
    transactionsCenter,
  };
};

export default UseTransactions;
