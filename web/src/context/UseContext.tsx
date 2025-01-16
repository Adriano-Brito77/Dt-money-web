import { createContext } from "react";

export const Context = createContext({});

interface childrenProps {
  children: React.ReactNode;
}
export const UserProvider = ({ children }: childrenProps) => {
  

  return (
    <Context.Provider
        value={{
            
        }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;