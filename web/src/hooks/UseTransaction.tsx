import React, { useState } from "react";
import api from "../utils/api";


interface Transaction {
  id: string;
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
  user: string;
}

export const UseTransactions =  () => {
  const [transactionsCenter, setTransactions] = React.useState<Transaction[]>([]);
  const [income, setIncome] = useState(Number)
  const [outcome, setOutcome] = useState(Number)
  const [result, setResult] = useState(Number)

  
const getTransactions = async () =>{
    
     const response = await api.get("/transaction");
      
        setTransactions(response.data.transaction);
        setIncome(response.data.totalIncome)
        setOutcome(response.data.totalOutcome)
        setResult(response.data.result);
  }

  

  return {
    income,
    outcome,
    result,
    transactionsCenter,
    getTransactions
  };
};

export default UseTransactions;
