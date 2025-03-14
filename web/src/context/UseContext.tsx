import { createContext, useContext } from "react";
import { useAuth } from "../hooks/UseAuth";
import { UseTransactions } from "../hooks/UseTransaction";
import { User } from "../pages/Register";
import { UserLogin } from "../pages/Login";

interface Transaction {
  id: string;
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
  user: string;
}

// Definindo a tipagem do contexto
interface AuthContextProps {
  register: (user: User) => void;
  login: (user: UserLogin) => void;
  logout: () => void;
  authenticated: boolean;
  loading: boolean;
  Username: string
}

interface TransactionContextProps {
    income:Number,
    outcome:Number,
    result:Number,
    transactionsCenter: Transaction[];
    getTransactions: () => void;
}

type CombinedContextProps = AuthContextProps & TransactionContextProps;

// Criando o contexto com a tipagem
export const Context = createContext<CombinedContextProps | null>(null);

interface ChildrenProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: ChildrenProps) => {
  const auth = useAuth();
  const transactions = UseTransactions();

  const contextValue: CombinedContextProps = {
    ...auth,
    ...transactions,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export const useCombinedContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useCombinedContext deve ser usado dentro de um UserProvider");
  }
  return context;
};

export default Context;