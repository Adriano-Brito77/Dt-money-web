import { createContext, useState } from "react";
import { useAuth } from "../hooks/UseAuth";
import { User } from "../pages/Register";
import { UserLogin } from "../pages/Login";

// Definindo a tipagem do contexto
// No seu Contexto
interface AuthContextProps {
  register: (user: User) => void; // Garantindo que a função register aceite um User
  login: (user: UserLogin) => void;
  logout: () => void;
  authenticated: boolean;
  loading: boolean;
  searchState: boolean;
}

// Criando o contexto com a tipagem
export const Context = createContext<AuthContextProps | null>(null);

interface childrenProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: childrenProps) => {
  // Chamando o hook useAuth sem passar argumentos
  const { register, login, logout, authenticated, loading } = useAuth();
  const [searchState, setSearchState] = useState(false);

  return (
    <Context.Provider
      value={{ register, login, logout, authenticated, loading, searchState }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
